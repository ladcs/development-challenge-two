import React from "react";
import { useMyContext } from "../context/hook";
import DeleteButton from "./DeleteButton";

const Tbody = () => {
  const { data } = useMyContext();
  return (
    <tbody>
      {data.map((patient)=> (
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
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default Tbody;