import React, { useState } from 'react';
import axios from 'axios'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import IPatient from '../interface/IPatient';
import { useMyContext } from '../context/hook';
import IEvent from '../interface/IEvent';

interface props {
  open: boolean;
  close: () => void;
  patient: IPatient;
}

const validateDate = (day: string, month: string) => {
  if (parseInt(day) > 31 || parseInt(day) < 1) return false;
  if (parseInt(month) > 12 || parseInt(month) < 1) return false;
  return true;
}

const EditForm = ({open, close, patient}: props) => {
  const { setData, data } = useMyContext()
  const [birthDate, setBirthDate] = useState({
    day: patient
    .birthDate
    .split('/')[1],
    month: patient
    .birthDate
    .split('/')[0],
    year: patient
    .birthDate
    .split('/')[2],
  });
  const [newPatient, setNewPatient] = useState({
    patientName: patient.patientName,
    number: patient.address.number,
    street: patient.address.street,
    email: patient.email,
  });
  const onChangeDate = ({ id, value }: IEvent) =>{
    setBirthDate({...birthDate,
      [id]: parseInt(value)})
  }
  const onChange = ({ id, value }: IEvent) => {
    setNewPatient({
      ...newPatient,
      [id]: value,
    });
  }
  return (
    <Dialog open={ open } onClose={ close }>
      <DialogTitle>
        Editar paciente
      </DialogTitle>
      <DialogContent>
        <DialogContentText sx={{color: 'black'}}>
          Entre com o nome, data de nascimento e endereço atualizados. Caso o e-mail esteja errado, esse deve ser deletado então criado novamente.
          Caso falte informações, o anterior será mantido. Para finalizar a edição preciso apertar no botão editar.
        </DialogContentText>
        <TextField
          autoFocus
          margin='dense'
          id='patientName'
          label='nome'
          type='string'
          fullWidth
          variant='standard'
          value={newPatient.patientName}
          onChange={(e)=> onChange(e.target)}
        />
        <DialogContentText>
          <br/>
          Data de nascimento:
        </DialogContentText>
        <TextField
          autoFocus
          margin='dense'
          id='day'
          label='dia'
          type='number'
          fullWidth
          variant='standard'
          value={birthDate.day}
          onChange={(e)=> onChangeDate(e.target)}
        />
        <TextField
          autoFocus
          margin='dense'
          id='month'
          label='mês'
          type='number'
          fullWidth
          variant='standard'
          value={birthDate.month}
          onChange={(e)=> onChangeDate(e.target)}
        />
        <TextField
          autoFocus
          margin='dense'
          id='year'
          label='ano'
          type='number'
          fullWidth
          variant='standard'
          value={birthDate.year}
          onChange={(e)=> onChangeDate(e.target)}
        />
        <DialogContentText>
          <br/>
          Endereço:
        </DialogContentText>
        <TextField
          autoFocus
          margin='dense'
          id='street'
          label='rua'
          type='string'
          fullWidth
          variant='standard'
          value={newPatient.street}
          onChange={(e)=> onChange(e.target)}
        />
        <TextField
          autoFocus
          margin='dense'
          id='number'
          label='numero'
          type='string'
          fullWidth
          variant='standard'
          value={newPatient.number}
          onChange={(e)=> onChange(e.target)}
        />
      </DialogContent>
      <DialogActions>
      <Button onClick={async () => {
        close();
        const inCache = data.findIndex(({email}) => email === patient.email);
        const patientInCache = [...data];
        const {
          patientName,
          number,
          street,
          email,
        } = newPatient;
        const { day, month, year } = birthDate;
        const pass = validateDate(day, month)
        if (pass) {
          const newBirthDateCache = [day, month, year].join('/');
          const newBirthDateApi = [month, day, year].join('/');
          const newAddress = {number, street};
          patientInCache[inCache]= {
            email,
            patientName,
            birthDate: newBirthDateCache,
            address: newAddress
          };
          setData(patientInCache);
          console.log(patientInCache[inCache]);
          await axios.patch(`https://fgfi62nwy1.execute-api.us-east-1.amazonaws.com/patient/${email}`, {
            patientName: patientInCache[inCache].patientName,
            birthDate: newBirthDateApi,
            address: patientInCache[inCache].address,
          });
        } else alert('data inválida')
      }}>
        editar
      </Button>
      </DialogActions>
    </Dialog>
  )
}

export default EditForm;