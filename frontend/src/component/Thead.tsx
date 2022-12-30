import React from 'react';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

const Thead = () => (
  <TableHead>
    <TableRow>
      <TableCell align="center" sx={{color: '#1976d2', fontWeight: 'bold'}}>
        Nome
      </TableCell>
      <TableCell align="center" sx={{color: '#1976d2', fontWeight: 'bold'}}>
        e-mail
      </TableCell>
      <TableCell align="center" sx={{color: '#1976d2', fontWeight: 'bold'}}>
        data de nascimento
      </TableCell>
      <TableCell align="center" sx={{color: '#1976d2', fontWeight: 'bold'}}>
        rua
      </TableCell>
      <TableCell align="center" sx={{color: '#1976d2', fontWeight: 'bold'}}>
        número
      </TableCell>
      <TableCell align="center" sx={{color: '#1976d2', fontWeight: 'bold'}}>
        remove/edit
      </TableCell>
    </TableRow>
  </TableHead>
)

export default Thead;