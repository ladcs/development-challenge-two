import React, { FormEvent } from "react";

const onClickEdit = (e: FormEvent) => {

}

const EditButton = () => (
  <button
  type="button"
  onClick={(e) => onClickEdit(e)}
  >

  </button>
);

export default EditButton;