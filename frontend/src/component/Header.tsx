import React, { useState } from 'react';
import Button from '@mui/material/Button';
import FilterListIcon from '@mui/icons-material/FilterList';
import { IconButton, Toolbar, Tooltip, Typography } from "@mui/material";
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
    <Toolbar sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
      }}>
      <Typography
      sx={{ flex: '1 1 100%' }}
      color="inherit"
      component='div'
      >
      <Button
      onClick={(e)=> {
        e.preventDefault();
        setOpenCreate(true);
      }}
      >
        Novo Paciente
      </Button>
      </Typography>
      <CreateForm open={openCreate} close={handleClose} />
      <Tooltip title="Filter list">
          <IconButton
          onClick={(e)=> {
            e.preventDefault();
            setOpenFilter(true);
          }}>
            <FilterListIcon sx={{color: '#1976d2'}} />
          </IconButton>
        </Tooltip>
    </Toolbar>
    <FilterForm open={openFilter} close={handleClose} />
  </div>
)}

export default Header;