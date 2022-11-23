import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
const Note = (props) => {
  return (
    <div className="note note-item" onClick={props.handleShow}>
      <h3 className="note-title">{props.title.substring(0, 40)}</h3>
      <span className="note-text">{props.text.substring(0, 40)}</span>
      <div className="footer--note">
        <small>{props.date}</small>
        <span className="delete-icon-container" onClick={props.handleDelete}>
          <DeleteIcon style={{ color: "black" }} />
        </span>
      </div>
    </div>
  );
};

export default Note;
