import { React, useEffect, useState } from "react";
import { nanoid } from "nanoid";
import Notes from "./components/Notes";
import Header from "./components/Header";
const App = () => {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("bullet-journal-notes")) || []
  );
  useEffect(() => {
    localStorage.setItem("bullet-journal-notes", JSON.stringify(notes));
  }, [notes]);
  const date = new Date();
  const addNote = (text) => {
    // text : objecet {title:str, body:str}
    const newNote = {
      id: nanoid(),
      title: text.title,
      text: text.body,
      date: date.toLocaleDateString(),
    };
    const newNotes = [newNote, ...notes];
    setNotes(newNotes);
  };
  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };
  const editNote = (text, id, title) => {
    const newNotes = notes.filter((note) => note.id !== id);
    const date = new Date();
    const newNote = {
      id: id,
      title: title,
      text: text,
      date: date.toLocaleDateString(),
    };
    setNotes([newNote, ...newNotes]);
  };
  const [searchText, setSearchText] = useState("");

  return (
    <div className="body-container">
      <Header search={setSearchText} />
      <Notes
        editNote={editNote}
        deleteNote={deleteNote}
        addNote={addNote}
        noteItems={notes.filter(
          (note) =>
            note.text.toLowerCase().includes(searchText) ||
            note.title.toLowerCase().includes(searchText)
        )}
        // search by note title or text in note body
      />
    </div>
  );
};

export default App;
