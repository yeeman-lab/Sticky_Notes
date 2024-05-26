import express from "express";
import bodyParser from "body-parser";
import { getNotes, addNotes, deleteNotes } from "./queries.js";

// Initialize Express app
const app = express();
const port = 3000; // Define the port number

// Middleware to parse incoming request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Create a router object
const router = express.Router();

// Use the router for all routes starting with /api
app.use("/api", router); // Mount the router on the /api path

// Define a simple route to check server connection
router.get("/", (req, res) => {
  res.send("Server is connected.");
});

// Route to query all notes from database
router.get("/get_notes", getNotes);

// Route to add a new note
router.post("/add_note", addNotes);

// Route to delete a note by ID
router.delete("/delete_notes/:id", deleteNotes);

// Start the server and listen on the defined port
app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});
