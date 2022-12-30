import React, { useState } from 'react'
import Header from '../component/Header'
import Tbody from '../component/Tbody';
import Thead from '../component/Thead'
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import { TablePagination } from '@mui/material';
import { useMyContext } from '../context/hook';

const Patients = () => {
  const { data } = useMyContext();
  const [page, setPage] = useState<number>(0);
  const [forPage,setForPage] = useState<number>(5);
  const handleChangePage = (e: unknown, newPage: number) => {
    setPage(newPage);
  }

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return(
  <div>
    <Header/>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 } } arial-label='simple table'>
        <Thead/>
        <Tbody
        page={page}
        forPage={forPage}
        />
      </Table>
    </TableContainer>
    <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={data.length}
          rowsPerPage={forPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
  </div>
)};

export default Patients;
