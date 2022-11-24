import React from "react";
import CloseIcon from "@mui/icons-material/Close";
const ModalNote = (props) => {
  return (
    props.show && (
      <div className="modal">
        <div className="modal-content">
          <p>{props.content}</p>
          <div>
            <CloseIcon
              onClick={props.handleClose}
              className="close-modal-button"
            />
          </div>
        </div>
      </div>
    )
  );
};

export default ModalNote;
