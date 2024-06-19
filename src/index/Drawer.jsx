import React, { useState } from 'react';
import {
  Box,
  SwipeableDrawer,
  List,
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  Typography
} from '@mui/material';
import { Menu, X, MapPin, ShoppingCart, User, LogOut } from 'lucide-react';

const Drawer = () => {
  const [state, setState] = useState(false);

  const toggleDrawer = () => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState(!state);
  };

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer()}
      onKeyDown={toggleDrawer()}
    >
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon style={{ minWidth: 40 }}>
              <MapPin color='#1b1b1b' />
            </ListItemIcon>
            <ListItemText primary='Mis Direcciones' style={{ color: '#1b1b1b' }} />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon style={{ minWidth: 40 }}>
              <ShoppingCart color='#1b1b1b' />
            </ListItemIcon>
            <ListItemText primary='Carrito' style={{ color: '#1b1b1b' }} />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon style={{ minWidth: 40 }}>
              <User color='#1b1b1b' />
            </ListItemIcon>
            <ListItemText primary='Mi Cuenta' style={{ color: '#1b1b1b' }} />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon style={{ minWidth: 40 }}>
              <LogOut color='red' />
            </ListItemIcon>
            <ListItemText primary='Salir' style={{ color: 'red' }} />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <IconButton onClick={toggleDrawer()}>
        {state ? <X color='#e6e6e6' /> : <Menu color='#e6e6e6' />}
      </IconButton>

      <SwipeableDrawer
        anchor='left'
        open={state}
        onClose={toggleDrawer()}
        onOpen={toggleDrawer()}
      >
        <Box
          display='flex'
          flexDirection='column'
          justifyContent='center'
          alignItems='center'
          bgcolor='#1b1b1b'
          height={100}
          borderRadius='0px 0px 30px 30px'
          boxShadow='0px -10px 30px 0px rgba(0, 0, 0, 1)'
        >
          <Typography
            color='#e6e6e6'
            fontSize={40}
            lineHeight={1}
            fontFamily='Timing'
            textAlign='center'
          >
            El Ropero
          </Typography>
          <Typography
            component='small'
            color='#e6e6e6'
            fontSize={12}
            textAlign='center'
          >
            La calidad de lo bueno
          </Typography>
        </Box>
        {list()}
      </SwipeableDrawer>
    </>
  );
}

export default Drawer;