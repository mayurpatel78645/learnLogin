import React from 'react';
import { AppBar, Toolbar, IconButton, Button } from '@material-ui/core';
import MenuIcon  from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton component={Link} to='/' edge="start" color="inherit" aria-label="menu">
           <MenuIcon />
          </IconButton>
          <Button component={Link} to='/login' color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </>
  )
}
