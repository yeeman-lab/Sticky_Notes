# Backend

This is the backend of a web application built with Node.js and PostgreSQL. The backend provides API endpoints for managing notes. It uses Express.js for routing and interacting with the database using the pg module.

## Project Structure

```plaintext
backend
├── index.js
├── package.json
├── queries.js
└── README.md
```

### File Descriptions

- **index.js**: The main entry point of the backend application. It sets up the Express server, defines API routes, and listens for incoming requests.
- **package.json**: The npm package file that defines project dependencies and scripts.
- **queries.js**: Contains functions to interact with the PostgreSQL database. It includes functions to retrieve all notes, add a new note, and delete a note by ID.
- **README.md**: The documentation file you're currently reading.

## Installation

To install and run this backend application locally, follow these steps:

1. Clone the repository:

   ```sh
   git clone https://github.com/yeeman-lab/Sticky_Notes.git
   ```

2. Navigate to the project directory:

   ```sh
   cd backend
   ```

3. Install the dependencies:

   ```sh
   npm install
   ```

4. Start the server:

   ```sh
   nodemon index.js
   ```

5. Database Configuration:

   - Sticky Notes uses PostgreSQL as its database. Ensure that you have PostgreSQL installed and running locally.
   - The backend assumes a PostgreSQL database named `keeper` running locally on port `5432`. Update the database connection details in the `queries.js` file if your configuration differs.
   - Before running the backend, you need to create a notes table in your PostgreSQL database. You can use the following SQL query to create the table:

     ```sql
     CREATE TABLE IF NOT EXISTS public.notes
     (
         id integer NOT NULL DEFAULT nextval('notes_id_seq'::regclass),
         title character varying(100) COLLATE pg_catalog."default",
         content character varying(300) COLLATE pg_catalog."default",
         CONSTRAINT notes_pkey PRIMARY KEY (id)
     );
     ```

   - Run this query in your PostgreSQL database management tool to create the notes table.

This will start the backend server, and it will be accessible at http://localhost:3000.

## API Endpoints

- **GET /api/get_notes**: Retrieves all notes from the database.
- **POST /api/add_note**: Adds a new note to the database.
  - Requires a JSON body with `title` and `content` fields.
- **DELETE /api/delete_notes/:id**: Deletes a note from the database by its ID.

## Dependencies

The backend relies on the following main dependencies:

- **express**: A minimalist web framework for Node.js.
- **pg**: Non-blocking PostgreSQL client for Node.js.

For a complete list of dependencies, refer to the `package.json` file.

## Contributing

Contributions are welcome! If you have any suggestions or improvements, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.
