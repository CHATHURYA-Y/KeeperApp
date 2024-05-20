import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import '../App.css';

function FormInput(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setNote(prevNote => ({
      ...prevNote,
      [name]: value
    }));
  }

  function submitNote() {
    if (note.title && note.content) {
      props.onAdd(note);
      setNote({
        title: "",
        content: ""
      });
    }
  }

  return (
    <div className="NoteInput">
      <div className="Inputs">
        <input
          name="title"
          onChange={handleChange}
          placeholder="Title"
          value={note.title}
        />
        <textarea
          name="content"
          onChange={handleChange}
          placeholder="Content"
          value={note.content}
        />
      </div>
      <div className="AddButton">
        <Fab
          sx={{
            backgroundColor: "#A020F0",
            '&:hover .MuiSvgIcon-root': {
              color: 'black',
            }
          }}
          aria-label="add"
          onClick={submitNote}
        >
          <AddIcon sx={{ color: 'white' }} />
        </Fab>
      </div>
    </div>
  );
}

export default FormInput;