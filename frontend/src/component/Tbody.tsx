import React, { Dispatch, useEffect, useState } from "react";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import { useMyContext } from "../context/hook";
import EditButton from "./EditButton";
import DeleteButton from "./DeleteButton";
import IPatient from "../interface/IPatient";
import IFilter from "../interface/IFilter";

const createFilterData = (
  setFilterData: Dispatch<React.SetStateAction<IPatient[]>>,
  filter: IFilter,
  data: IPatient[]) => {
  const { filterByName, filterByEmail } = filter;
  const dataByName: IPatient[] = filterByName !== '' ? data
  .filter(({patientName}) => patientName
  .includes(filterByName)) :
  data;
  const dataByEmail = filterByEmail !== '' ? dataByName
  .filter(({email}) => email.includes(filterByEmail)) : dataByName;
  setFilterData(dataByEmail);
}

interface props {
  page: number;
  forPage: number;
}

const Tbody = ({page, forPage}: props) => {
  const { data, filter } = useMyContext();
  const [filterData, setFilterData] = useState<IPatient[]>([]);
  useEffect(() => {
    createFilterData(setFilterData, filter, data)
  }, [filter, data]);
  return (
    <TableBody>
      {filterData.slice(page * forPage, page * forPage + forPage).map((patient)=> (
        <TableRow key={ patient.email }
        style={{
          height: 10 * Math.max(0, Math.max(0, (1 + page) * forPage - data.length)),
        }}
        >
          <TableCell component="th" scope="row" align='center'>
            { patient.patientName }
          </TableCell>
          <TableCell align="center">
            { patient.email }
          </TableCell>
          <TableCell align="center">
            { patient.birthDate }
          </TableCell>
          <TableCell align="center">
            { patient.address.street }
          </TableCell>
          <TableCell align="center">
            { patient.address.number }
          </TableCell>
          <TableCell align="center">
            <DeleteButton email={ patient.email } />
          </TableCell>
          <TableCell align='left'>
            <EditButton patient={patient}/>
          </TableCell>
        </TableRow>
      ))}
      <TableRow
        style={{
          height: 33 * Math.max(0, Math.max(0, (1 + page) * forPage - data.length)),
        }}
        >
        <TableCell colSpan={6} />
        </TableRow>
    </TableBody>
  );
};

export default Tbody;