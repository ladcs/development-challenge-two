import React, { FormEvent } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import SvgIcon from '@mui/material/SvgIcon';
import { useMyContext } from "../context/hook";
import IPatient from "../interface/IPatient";
import axios from 'axios';
import { IconButton, Tooltip } from "@mui/material";

interface props {
  email: string,
}

const onClickDelete = async (
  e: FormEvent,
  email: string,
  data: IPatient[],
  setData: React.Dispatch<React.SetStateAction<IPatient[]>>) => {
  e.preventDefault();
  try {
    const newData = data.filter((patient) => email !== patient.email)
    setData(newData);
    await axios.get(`https://fgfi62nwy1.execute-api.us-east-1.amazonaws.com/patient/${email}`);
  } catch (error) {
    console.log(error);
  }
}

const DeleteButton = ({ email }: props) => {
  const { data, setData } = useMyContext();
  return (
    <Tooltip title='deletar'>
      <IconButton
      className='inline'
      type="button"
      onClick={async (e) => await onClickDelete(e, email, data, setData)}
      >
        <SvgIcon component={DeleteIcon} sx={ {color: 'red' } }/>
      </IconButton>
    </Tooltip>
  );
};

export default DeleteButton;