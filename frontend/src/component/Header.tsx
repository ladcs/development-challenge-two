import React, { useState } from 'react';
import Button from '@mui/material/Button';
import CreateForm from './CreateForm';
import FilterForm from './FilterForm';

const Header = () => {
  const [openCreate, setOpenCreate] = useState(false);
  const [openFilter, setOpenFilter] = useState(false);

  const handleClose = () => {
    openCreate ? setOpenCreate(false) : setOpenFilter(false);
  }
  return (
  <div>
  <h1> Pacientes </h1>
  <Button
  onClick={(e)=> {
    e.preventDefault();
    setOpenCreate(true);
  }}
  >Adicionar novo Paciente</Button>
  <CreateForm open={openCreate} close={handleClose} />
  <Button
  onClick={(e)=> {
    e.preventDefault();
    setOpenFilter(true);
  }}> criar Filtro </Button>
  <FilterForm open={openFilter} close={handleClose} />
  </div>
)}

export default Header;