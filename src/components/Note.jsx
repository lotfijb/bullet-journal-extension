import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
const Note = (props) => {
  return (
    <div className="note" onClick={props.handleShow}>
      <span className="note-text">{props.text.substring(0, 40)}</span>
      <div className="footer--note">
        <small>{props.date}</small>
        <span className="delete-icon-container" onClick={props.handleDelete}>
          <DeleteIcon style={{ color: "red" }} />
        </span>
      </div>
    </div>
  );
};

export default Note;
