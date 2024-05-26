# React + Vite - Sticky Notes Web App

This is the front end of a web application built with React. The application allows users to create, view, and delete notes. The project uses React functional components and hooks to manage state and handle side effects.

## Project Structure

```plaintext
my-react-app
├── node_modules
├── public
│ ├── index.css
├── src
│ ├── App.jsx
│ ├── CreateArea.jsx
│ ├── Footer.jsx
│ ├── Header.jsx
│ ├── main.jsx
│ ├── Note.jsx
│ ├── TextAreaWithCount.jsx
├── index.html
├── package.json
├── README.md
```

### File Descriptions

- **src/App.jsx**: The main component that holds the state for the notes and manages the addition and deletion of notes.
- **src/CreateArea.jsx**: A component that includes a form for creating new notes. It includes a title input and a textarea with character count.
- **src/Footer.jsx**: A simple footer component.
- **src/Header.jsx**: A simple header component.
- **src/main.jsx**: The entry point of the React application, which renders the `App` component into the DOM.
- **src/Note.jsx**: A component that displays a single note with a title, content, and a delete button.
- **src/TextAreaWithCount.jsx**: A component that provides a textarea with a character count.

## Installation

To install and run this project locally, follow these steps:

1. Clone the repository:

   ```sh
   git clone https://github.com/your-username/my-react-app.git
   ```

2. Navigate to the project directory:

   ```sh
   cd my-react-app
   ```

3. Install the dependencies:

   ```sh
   npm install
   ```

4. Start the development server:

   ```sh
   npm run dev
   ```

This will run the app in development mode and open http://localhost:5173 to view it in the browser.

## Dependencies

This project relies on the following main dependencies:

- **React**: A JavaScript library for building user interfaces.
- **@mui/icons-material**: Material-UI icons used in the project.

For a complete list of dependencies, refer to the `package.json` file.

## Components Overview

### App.jsx

The main component of the application. It maintains the state of the notes and includes functions to fetch, add, and delete notes from the backend API.

### CreateArea.jsx

A form component for creating new notes. It uses an input field for the title and a custom `TextAreaWithCount` component for the note content.

### Note.jsx

A component that displays an individual note with a title, content, and a delete button.

### TextAreaWithCount.jsx

A custom textarea component that displays the current character count and the maximum allowed characters.

## Styling

The styling for the components is managed in `index.css` located in the `public` directory. You can customize the appearance of the application by modifying this file.

## Contributing

Contributions are welcome! If you have any suggestions or improvements, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.
