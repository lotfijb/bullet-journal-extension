import { React, useState } from "react";

const CreateNote = (props) => {
  const [noteText, setNoteText] = useState("");
  const handleChange = (event) => {
    setNoteText(event.target.value);
  };
  const handleSave = () => {
    if (noteText !== "") {
      props.add(noteText);
      setNoteText("");
    }
  };
  return (
    <div className="note new-note">
      <textarea
        name=""
        id=""
        rows="10"
        cols="8"
        onChange={handleChange}
        value={noteText}
        placeholder="Type a new note here .."
      ></textarea>
      <div className="footer--note">
        {/* <small>{250 - noteText.length} remaining..</small> */}
        <button className="button-11" onClick={handleSave}>
          Add note!
        </button>
      </div>
    </div>
  );
};

export default CreateNote;
