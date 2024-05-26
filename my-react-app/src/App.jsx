import { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  // State to store the list of notes
  const [notes, setNotes] = useState([]);

  // Function to fetch notes from the server
  function get_notes() {
    fetch("/api/get_notes")
      .then((response) => response.json())
      .then((data) => {
        setNotes(data); // Update the state with the fetched notes
      });
  }

  // useEffect hook to fetch notes when the component mounts
  useEffect(() => {
    get_notes();
  }, []);

  // Function to add a new note
  function addNote(newNote) {
    let title = newNote.title;
    let content = newNote.content;
    fetch("/api/add_note", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, content }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok " + response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        setNotes((prevNotes) => {
          return [...prevNotes, data[0]]; // Add the new note to the state
        });
      });
  }

  // Function to delete a note by its id
  function deleteNote(id) {
    fetch(`/api/delete_notes/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok " + response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        get_notes(); // Refresh the list of notes after deletion
      });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {/* Map over the notes and render a Note component for each one */}
      {notes.map((noteItem, index) => {
        return <Note key={noteItem.id} id={noteItem.id} title={noteItem.title} content={noteItem.content} onDelete={deleteNote} />;
      })}
      <Footer />
    </div>
  );
}

export default App;
