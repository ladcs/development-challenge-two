import React, { useState } from "react";
import EditIcon from '@mui/icons-material/Edit';
import SvgIcon from '@mui/material/SvgIcon';
import EditForm from "./EditForm";
import IPatient from "../interface/IPatient";
import { IconButton, Tooltip } from "@mui/material";

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
    <Tooltip title='editar'>
      <IconButton
        className='inline'
        type="button"
        onClick={(e) => {
        e.preventDefault();
          setOpen(true);
        }}
        >
          <SvgIcon component={ EditIcon } sx={ { color: '#78BEB9' } } />
      </IconButton>
    </Tooltip>
    <EditForm open={open} close={handleClose} patient={ patient }/>
  </div>
  
);
}

export default EditButton;