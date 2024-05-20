import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import Fab from '@mui/material/Fab';
import '../App.css';

function Note ({ id, title, content, onDelete }) {
  return (
    <div className="Note">
      <div className="NoteHeader">
        <h1>{title}</h1>
      </div>
      <div className="NoteContent">
        <p>{content}</p>
      </div>
      <div className="DeleteButton">
        <Fab
          sx={{
            backgroundColor: "#FF0000",
            '&:hover .MuiSvgIcon-root': {
              color: 'black',
            }
          }}
          aria-label="delete"
          onClick={() => onDelete(id)}
        >
          <DeleteIcon sx={{ color: 'white' }} />
        </Fab>
      </div>
    </div>
  );
}

export default Note;