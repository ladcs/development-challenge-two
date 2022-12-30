import React, { useState } from 'react';
import axios from 'axios'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useMyContext } from '../context/hook';
import IPatient from '../interface/IPatient';
import IEvent from '../interface/IEvent';

const requestToPost = async (toCache: IPatient) => {
  const fixDate = toCache.birthDate.split('/');
  const { data } = await axios.post('https://fgfi62nwy1.execute-api.us-east-1.amazonaws.com/patient', {
    email: toCache.email,
    patientName: toCache.patientName,
    address: toCache.address,
    birthDate: [fixDate[1], fixDate[0], fixDate[2]].join('/'),
  });
  return data;
}

interface newPatient {
  email: string,
  patientName: string,
  street: string,
  day: string,
  month: string,
  year: string,
  number: string,
}

interface props {
  open: boolean;
  close: () => void;
}

const validateDate = (day: string, month: string, data: IPatient[], email: string) => {
  if (parseInt(day) > 31 || parseInt(day) < 1) return false;
  if (parseInt(month) > 12 || parseInt(month) < 1) return false;
  const exist = data.filter(({email: e}) => e === email);
  if (exist.length === 0) return true;
  return false;
}

const CreateForm = ({open, close}: props) => {
  const { setData, data } = useMyContext()
  const [newPatient, setNewPatient] = useState<newPatient>({
    email: '',
    patientName: '',
    street: '',
    day: '',
    month: '',
    year: '',
    number: '',
  })

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
          Entre com os dados do novo paciente.
        </DialogContentText>
        <TextField
          autoFocus
          margin='dense'
          id='email'
          label='email'
          type='string'
          fullWidth
          variant='standard'
          value={newPatient.email}
          onChange={(e)=> onChange(e.target)}
        />
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
          value={newPatient.day}
          onChange={(e)=> onChange(e.target)}
        />
        <TextField
          autoFocus
          margin='dense'
          id='month'
          label='mês'
          type='number'
          fullWidth
          variant='standard'
          value={newPatient.month}
          onChange={(e)=> onChange(e.target)}
        />
        <TextField
          autoFocus
          margin='dense'
          id='year'
          label='ano'
          type='number'
          fullWidth
          variant='standard'
          value={newPatient.year}
          onChange={(e)=> onChange(e.target)}
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
        const {
          patientName,
          number,
          street,
          email,
        } = newPatient;
        const { day, month, year } = newPatient;
        const pass = validateDate(day, month, data, email);
        if (pass) {
          close();
          const newBirthDate = [day, month, year].join('/');
          const newAddress = {number: parseInt(number), street};
          const patientInCache= {
            email,
            patientName,
            birthDate: newBirthDate,
            address: newAddress
          };
          setData([...data, patientInCache]);
          await requestToPost(patientInCache);
          setNewPatient({
            email: '',
            patientName: '',
            street: '',
            day: '',
            month: '',
            year: '',
            number: '',
          });
        } else alert('data inválida ou usuário já existe, para é preciso colocar dois dígitos para dia e mês');
      }}>
        criar
      </Button>
      </DialogActions>
    </Dialog>
  )
}

export default CreateForm;