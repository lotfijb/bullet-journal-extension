import { React, useEffect, useState } from "react";
import { nanoid } from "nanoid";
import Notes from "./components/Notes";
import Header from "./components/Header";
import ModalNote from "./components/ModalNote";

const App = () => {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("bullet-journal-notes")) || []
  );
  useEffect(() => {
    localStorage.setItem("bullet-journal-notes", JSON.stringify(notes));
  }, [notes]);
  const date = new Date();
  const addNote = (text) => {
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [newNote, ...notes];
    setNotes(newNotes);
  };
  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };
  const [searchText, setSearchText] = useState("");

  return (
    <div className="body-container">
      <Header search={setSearchText} />
      <Notes
        deleteNote={deleteNote}
        addNote={addNote}
        noteItems={notes.filter((note) =>
          note.text.toLowerCase().includes(searchText)
        )}
      />
    </div>
  );
};

export default App;
