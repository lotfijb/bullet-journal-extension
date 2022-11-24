import { React, useState } from "react";
import CreateNote from "./CreateNote";
import ModalEdit from "./ModalEdit";
import ModalNote from "./ModalNote";
import Note from "./Note";

const Notes = ({ addNote, noteItems, deleteNote, editNote }) => {
  const notesElements = noteItems.map((noteItem) => {
    return (
      <Note
        handleDelete={() => deleteNote(noteItem.id)}
        key={noteItem.id}
        title={noteItem.title}
        text={noteItem.text}
        date={noteItem.date}
        handleShow={() =>
          changeShow(noteItem.text, noteItem.id, noteItem.title)
        }
      />
    );
  });
  const [show, setShow] = useState({
    text: "",
    show: false,
    id: "",
    title: "",
  });
  function changeShow(text, id, title) {
    setShow((prevShow) => {
      return {
        title: title,
        id: id,
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
      {/* <ModalNote
        handleClose={disableShow}
        show={show.show}
        content={show.text}
      /> */}
      <ModalEdit
        handleClose={disableShow}
        show={show.show}
        content={show.text}
        id={show.id}
        title={show.title}
        handleEdit={editNote}
      />
    </div>
  );
};

export default Notes;
