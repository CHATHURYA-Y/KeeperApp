import { AppBar, Toolbar, IconButton , Typography} from '@mui/material';
import React from "react";
import EditNoteIcon from '@mui/icons-material/EditNote';


function NavBar()
{
  const name = "To-Do List";
    return (
        <React.Fragment>
          <AppBar position="fixed" sx={{backgroundColor:'#A020F0'}}>
            <Toolbar >
            <IconButton edge="center" color="inherit" aria-label="edit-note" sx={{ ml:4}}>
            <EditNoteIcon sx={{fontSize:40 }}/>
          </IconButton>
          <Typography variant='h5'>{name}</Typography>
              </Toolbar>
          </AppBar>
          <Toolbar />
        </React.Fragment>
      );
}


export default NavBar;