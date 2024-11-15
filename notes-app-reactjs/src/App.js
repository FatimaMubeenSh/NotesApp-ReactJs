import { useEffect, useState } from "react";
import NotesList from "./components/NotesList";
import { nanoid } from "nanoid";
import SearchBar from "./components/SearchBar";
import Header from "./components/Header";

function App() {
  const [notesArray, setNotesArray] = useState([
    {
      id: nanoid(6),
      text: "First notes text area",
      date: "10/11/24",
    },
    {
      id: nanoid(6),
      text: "second notes text area",
      date: "11/11/24",
    },
    {
      id: nanoid(6),
      text: "third notes text area",
      date: "12/11/24",
    },
  ]);

  const addNewNote = (noteText) => {
    let noteDate = new Date();
    let newNote = {
      id: nanoid(6),
      text: noteText,
      date: noteDate.toLocaleDateString(),
    };
    let updatedNotes = [...notesArray, newNote];
    setNotesArray(updatedNotes);
    localStorage.setItem("notes-app-local-data", JSON.stringify(updatedNotes));
  };

  const deleteNote = (noteId) => {
    let updatedNotes = notesArray.filter((note) => note.id !== noteId);
    setNotesArray(updatedNotes);
    localStorage.setItem("notes-app-local-data", JSON.stringify(updatedNotes));
  };

  const [searchText, setSearchText] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const fetchedNotes = JSON.parse(localStorage.getItem("notes-app-local-data"));
    if (fetchedNotes) {
      setNotesArray(fetchedNotes);
    }
  }, []);

  return (
    <div className={`${darkMode && "dark-mode"}`}>
      <div className="container">
        <Header toggleMode={setDarkMode} />
        <SearchBar handleSearchText={setSearchText} />
        <NotesList notes={notesArray.filter((note) => note.text.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()))} handleAddNote={addNewNote} handleDeleteNote={deleteNote} />
      </div>
    </div>
  );
}

export default App;
