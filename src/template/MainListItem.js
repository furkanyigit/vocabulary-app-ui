import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import AppsIcon from '@mui/icons-material/Apps';
import { Link } from 'react-router-dom';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { useState } from 'react';

function MainListItem() {

  const [open, setOpen] = useState(false);

  const hanldeOpenApp = () => {
    setOpen((prevOpen) => !prevOpen);
  }

  return (
    <React.Fragment>
      <Link to="/" className='Link'>
        <ListItemButton>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon >
          <ListItemText primary="Anasayfa" />
        </ListItemButton>
      </Link>

      <ListItemButton onClick={hanldeOpenApp}>
        <ListItemIcon>
          <AppsIcon />
        </ListItemIcon>
        <ListItemText primary="Uygulamalar"></ListItemText>
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Link to="/vocabHome" className='Link'>
        <ListItemButton >
          <Collapse component="li" in={open} timeout="auto">
            <ListItemText primary="Kelime Uygulaması" />
          </Collapse>
        </ListItemButton>
      </Link>
    </React.Fragment>
  )
}

export default MainListItem;