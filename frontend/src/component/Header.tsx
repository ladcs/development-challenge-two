import React, { useState } from 'react';
import Button from '@mui/material/Button';
import CreateForm from './CreateForm';

const Header = () => {
  const handleClose = () => {
    setOpen(false)
  }

  const [open, setOpen] = useState(false);
  return (
  <div>
  <h1> Pacientes </h1>
  <Button
  onClick={(e)=> {
    e.preventDefault();
    setOpen(true);
  }}
  >Adicionar novo Paciente</Button>
  <CreateForm open={open} close={handleClose} />
  </div>
)}

export default Header;