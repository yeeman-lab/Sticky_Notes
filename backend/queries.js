// Import the pg module for interacting with PostgreSQL database
import pg from "pg";

// Create a new pool instance to manage database connections
const pool = new pg.Pool({
  user: "postgres",
  host: "localhost",
  database: "keeper",
  password: "yourpassword", //type in your POSTGRESQL password here
  port: 5432,
});

// Function to retrieve all notes from the database
const getNotes = (request, response) => {
  // Execute a SQL query to select all rows from the 'notes' table
  pool.query("SELECT * FROM notes", (err, result) => {
    if (err) {
      // Log and throw an error if query execution fails
      console.error("Error executing query", err.stack);
      throw err;
    } else {
      // Send the retrieved rows as JSON response if query is successful
      response.status(200).json(result.rows);
    }
  });
};

// Function to add a new note to the database
const addNotes = (request, response) => {
  // Extract title and content from the request body
  const { title, content } = request.body;
  // Execute a SQL query to insert a new row into the 'notes' table
  pool.query("INSERT INTO notes (title, content) VALUES($1, $2) RETURNING *", [title, content], (err, result) => {
    if (err) {
      // Log and throw an error if query execution fails
      console.error("Error executing query", err.stack);
      throw err;
    } else {
      // Send the inserted row as JSON response if query is successful
      response.status(200).json(result.rows);
    }
  });
};

// Function to delete a note from the database by its ID
const deleteNotes = (request, response) => {
  // Extract note ID from the request parameters
  const id = parseInt(request.params.id);
  // Execute a SQL query to delete a row from the 'notes' table by ID
  pool.query("DELETE FROM notes WHERE id = $1 RETURNING *", [id], (err, result) => {
    if (err) {
      // Log and throw an error if query execution fails
      console.error("Error executing query", err.stack);
      throw err;
    } else {
      // Send the deleted row as JSON response if query is successful
      response.status(200).json(result.rows);
    }
  });
};

export { getNotes, addNotes, deleteNotes };
