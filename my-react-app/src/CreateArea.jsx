import React, { useState } from "react";
import TextAreaWithCount from "./TextAreaWithCount";
import NoteAddOutlinedIcon from "@mui/icons-material/NoteAddOutlined";

function CreateArea(props) {
  // State to store the current note being created
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  // Function to handle changes in the input fields
  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value, // Update the corresponding field in the note
      };
    });
  }

  // Function to handle the submission of a new note
  function submitNote(event) {
    props.onAdd(note); // Call the onAdd function passed from the parent component
    setNote({
      title: "",
      content: "", // Reset the note state to clear the input fields
    });
    this.forceUpdate();
    event.preventdefault(); // Prevent the default form submission behavior
  }

  return (
    <div>
      <form>
        <input name="title" onChange={handleChange} value={note.title} placeholder="Title" maxLength="100" />
        {/* Text area with character count for the note content */}
        <TextAreaWithCount name="content" value={note.content} placeholder="Take a note..." rows="3" maxlength="300" onUpdate={handleChange} />
        <button onClick={submitNote}>
          <NoteAddOutlinedIcon />
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
