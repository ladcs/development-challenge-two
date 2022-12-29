import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useMyContext } from '../context/hook';
import IEvent from '../interface/IEvent';

interface props {
  open: boolean;
  close: () => void;
}

const FilterForm = ({open, close}: props) => {
  const { setFilter } = useMyContext();
  const [newFilter, setNewFilter] = useState({
    filterByName: '',
    filterByEmail:'',
  })
  const onChange = ({ id, value }: IEvent) => {
    setNewFilter({
      ...newFilter,
      [id]: value,
    });
  };

  const onClick = () => {
    setFilter(newFilter);
    close();
  };

  return (
    <Dialog open={open} onClose={ close }>
      <DialogTitle>
        Filtro por nome e por email
      </DialogTitle>
      <DialogContent>
        <DialogContentText sx={{ color: 'black' }}>
          A filtragem é feita primeiro pelo nome e depois pelo email. Será feita depois do botão submit pressionado.
        </DialogContentText>
        <TextField
          autoFocus
          margin='dense'
          id='filterByName'
          label='filtro por nome'
          type='string'
          fullWidth
          variant='standard'
          value={newFilter.filterByName}
          onChange={(e) => onChange(e.target)}
        />
        <TextField
          autoFocus
          margin='dense'
          id='filterByEmail'
          label='filtro pelo email'
          type='string'
          fullWidth
          variant='standard'
          value={newFilter.filterByEmail}
          onChange={(e) => onChange(e.target)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={ onClick }>
          submit
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default FilterForm;