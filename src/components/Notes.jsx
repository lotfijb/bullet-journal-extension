import { React, useState } from "react";
import CreateNote from "./CreateNote";
import ModalNote from "./ModalNote";
import Note from "./Note";

const Notes = ({ addNote, noteItems, deleteNote }) => {
  const notesElements = noteItems.map((noteItem) => {
    return (
      <Note
        handleDelete={() => deleteNote(noteItem.id)}
        key={noteItem.id}
        text={noteItem.text}
        date={noteItem.date}
        handleShow={() => changeShow(noteItem.text)}
      />
    );
  });
  const [show, setShow] = useState({ text: "", show: false });
  function changeShow(text) {
    setShow((prevShow) => {
      return {
        text: text,
        show: !prevShow.show,
      };
    });
  }
  function disableShow() {
    setShow((prevShow) => {
      return {
        ...prevShow,
        show: false,
      };
    });
  }
  return (
    <div className="notes-container scrollBarOrangeTransparent thinScrollbar">
      <CreateNote add={addNote} />
      {notesElements}
      <ModalNote
        handleClose={disableShow}
        show={show.show}
        content={show.text}
      />
    </div>
  );
};

export default Notes;
