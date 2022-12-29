import React, { useState } from "react";
import EditIcon from '@mui/icons-material/Edit';
import SvgIcon from '@mui/material/SvgIcon';
import Button from '@mui/material/Button';
import EditForm from "./EditForm";
import IPatient from "../interface/IPatient";

interface props {
  patient: IPatient;
}

const EditButton = ({ patient }: props) => {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  }
  return(
  <div>
    <Button
      type="button"
      onClick={(e) => {
        e.preventDefault();
        setOpen(true);
      }}
      >
      <SvgIcon component={ EditIcon } sx={ { color: 'black' } } />
    </Button>
    <EditForm open={open} close={handleClose} patient={ patient }/>
  </div>
  
);
}

export default EditButton;