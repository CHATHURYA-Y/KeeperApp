import React, { useState } from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import FormInput from './Components/FormInput';
import Note from './Components/Note';

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes(prevNotes => [...prevNotes, newNote]);
  }

  function deleteNote(id) {
    setNotes(prevNotes => prevNotes.filter((noteItem, index) => index !== id));
  }

  return (
    <div className="App">
      <div className="Nav">
        <NavBar />
      </div>
      <div className="Below-Nav">
        <div className="InputBox">
          <FormInput onAdd={addNote} />
        </div>
        <div className="NotesContainer">
          {notes.map((noteItem, index) => (
            <Note
              key={index}
              id={index}
              title={noteItem.title}
              content={noteItem.content}
              onDelete={deleteNote}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;