import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

const ModalEdit = (props) => {
  const [text, setText] = useState(props.content);
  function handleChange(event) {
    setText(event.target.value);
    console.log(text);
  }
  return (
    props.show && (
      <div className="modal modal-edit">
        <div className="modal-content modal-content-edit">
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            defaultValue={props.content}
            onChange={handleChange}
          ></textarea>
          <CloseIcon
            onClick={props.handleClose}
            className="close-modal-button"
          />
          <button
            className="button-11"
            onClick={() => {
              props.handleEdit(text, props.id, props.title);
            }}
          >
            Edit or restore note!
          </button>
        </div>
      </div>
    )
  );
};
export default ModalEdit;
