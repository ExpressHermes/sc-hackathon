import { ShoppingBag } from '@mui/icons-material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import CustomizedBadges from './shoppingCartBadge';

const customStyle = {
  background: "white",
  zIndex: 1000
}

export default function MenuAppBar() {
  return (
    <Box sx={{ pb: 7}} style={customStyle}>
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3} style={customStyle}>
      <AppBar position="fixed" color="transparent">
        <Toolbar style={customStyle}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <ShoppingBag />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Shop
          </Typography>
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
              >
                <CustomizedBadges/>
              </IconButton>
            </div>
        </Toolbar>
      </AppBar>
      </Paper>
    </Box>
  );
}