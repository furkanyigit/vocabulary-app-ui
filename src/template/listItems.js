import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import AppsIcon from '@mui/icons-material/Apps';
import { Link } from 'react-router-dom';



export const mainListItems = (

  <React.Fragment>
    <Link to="/" className='Link'>
      <ListItemButton>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon >
        <ListItemText primary="Home" />
      </ListItemButton>
    </Link>


    <Link to="/vocabHome" className='Link'>
      <ListItemButton>
        <ListItemIcon>
          <AppsIcon />
        </ListItemIcon>
        <ListItemText primary="Applications"></ListItemText>
      </ListItemButton>
    </Link>

    
  </React.Fragment>
);