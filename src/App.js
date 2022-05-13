import NoteList from "./Components/NoteList";
import { nanoid } from "nanoid";
import { useState, useEffect } from 'react';
import Search from "./Components/Search"
import Header from "./Components/Header";
import './App.css'

const App = () => {
  const [notes, setNotes] = useState(() => {
    const savedNotes = JSON.parse(
      localStorage.getItem('react-note-app-data')
    );
    if (savedNotes !== null) return savedNotes;
    else return [];
  });

  const [searchText, setSearchText] = useState('');

  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const savedNotes = JSON.parse(
      localStorage.getItem('react-note-app-data')
    );
    if(savedNotes) {
      setNotes(savedNotes);
    } 
  }, []);

  useEffect(() => {
    localStorage.setItem(
      'react-note-app-data',
      JSON.stringify(notes)
    )
  }, [notes]);

  const addNote = (text, randomColor) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
      bgColor: randomColor,
    };

    setNotes([
      ...notes,
      newNote
    ]);
  }
  const deleteNote = (id) => {
    const newNote = notes.filter((note) => note.id !== id);
    setNotes(newNote);
  }

  return (
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className="container">
        <Header handleToggleDarkMode={setDarkMode} darkMode={darkMode}/>
        <Search handleSearch={setSearchText}/>
        <NoteList
          notes={notes.filter((note) =>
              note.text.toLowerCase().includes(searchText)
          )} 
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
        />
      </div>
    </div>
  )
}

export default App;
