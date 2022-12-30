import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { IconButton, Toolbar, Tooltip, Typography } from "@mui/material";
import CreateForm from './CreateForm';
import FilterForm from './FilterForm';
import SearchIcon from '@mui/icons-material/Search';

const HeaderTable = () => {
  const [openCreate, setOpenCreate] = useState(false);
  const [openFilter, setOpenFilter] = useState(false);

  const handleClose = () => {
    openCreate ? setOpenCreate(false) : setOpenFilter(false);
  }
  return (
  <div>
    <Typography
      align='center'
      variant='h1'
      sx={{
        backgroundColor: "#78BEB9",
        color: 'white',
        fontFamily: "Noto Serif"
      }}
      > Pacientes </Typography>
    <Toolbar sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 }
      }}>
      <Typography
      sx={{ flex: '1 1 100%' }}
      color="inherit"
      component='div'
      >
      <Button
      sx={{
        backgroundColor: '#A3B5C1',
        color: 'white'
      }}
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
            <SearchIcon sx={{
            backgroundColor: '#A3B5C1',
            color: 'white',
            }} 
            style={{
              height: '40px',
              width: '40px',
              borderRadius: '20%'
          }}
            />
          </IconButton>
        </Tooltip>
    </Toolbar>
    <FilterForm open={openFilter} close={handleClose} />
  </div>
)}

export default HeaderTable;