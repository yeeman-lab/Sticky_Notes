import React from "react";
import CancelIcon from "@mui/icons-material/CancelOutlined";

function Note(props) {
  function handleClick() {
    // Function to handle the delete button click
    props.onDelete(props.id); // Call the onDelete function passed from the parent component with the note's id
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>
        <CancelIcon />
      </button>
    </div>
  );
}

export default Note;
