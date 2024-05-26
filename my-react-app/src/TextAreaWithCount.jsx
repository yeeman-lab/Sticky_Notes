import React, { useState } from "react";

function TextAreaWithCount(props) {
  // State to keep track of the character count in the textarea
  const [textAreaCount, setTextAreaCount] = React.useState(0);

  // Function to handle changes in the textarea
  function handleChange(event) {
    const { name, value } = event.target;
    setTextAreaCount(event.target.value.length); // Update the character count
    props.onUpdate(event); // Call the onUpdate function passed from the parent component
  }

  return (
    <div>
      <textarea type="text" rows={props.rows} onChange={handleChange} name={props.name} value={props.value} placeholder={props.placeholder} maxLength={props.maxlength} />
      <p>
        {textAreaCount} / {props.maxlength}
      </p>
    </div>
  );
}

export default TextAreaWithCount;
