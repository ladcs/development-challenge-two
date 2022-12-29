import React, { Dispatch, useEffect, useState } from "react";
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

const Tbody = () => {
  const { data, filter } = useMyContext();
  const [filterData, setFilterData] = useState([] as IPatient[]);
  useEffect(() => {
    createFilterData(setFilterData, filter, data)
  }, [filter, data]);
  return (
    <tbody>
      {filterData.map((patient)=> (
        <tr key={ patient.email }>
          <td>
            { patient.patientName }
          </td>
          <td>
            { patient.email }
          </td>
          <td>
            { patient.birthDate }
          </td>
          <td>
            { patient.address.street }
          </td>
          <td>
            { patient.address.number }
          </td>
          <td>
            <DeleteButton email={ patient.email } />
            <EditButton patient={patient}/>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default Tbody;