import { React, useState } from "react";

const CreateNote = (props) => {
  const [noteText, setNoteText] = useState({ title: "", body: "" });
  const handleChange = (event) => {
    setNoteText((prevNoteText) => {
      return {
        ...prevNoteText,
        [event.target.name]: event.target.value,
      };
    });
  };
  const handleSave = () => {
    if (noteText.body !== "" && noteText.title !== "") {
      props.add(noteText);
      setNoteText({ title: "", body: "" });
    }
  };
  return (
    <div className="note new-note">
      <textarea
        className="title-textarea"
        name="title"
        id=""
        rows="1"
        cols="8"
        onChange={handleChange}
        value={noteText.title}
        placeholder="Type note title here .."
      ></textarea>
      <textarea
        className="body-textarea"
        name="body"
        id=""
        rows="10"
        cols="8"
        onChange={handleChange}
        value={noteText.body}
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
