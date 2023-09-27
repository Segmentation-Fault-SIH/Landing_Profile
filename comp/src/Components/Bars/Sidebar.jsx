
"use client"
import React from 'react';
import { useLocationContext } from '@/context';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import MapIcon from '@mui/icons-material/Map';
import BusinessIcon from '@mui/icons-material/Business';
import { useRouter } from 'next/router';
const drawerWidth = 240;


const Sidebar = ({  })=> {
  const {val , setVal , changeVal} = useLocationContext();
      return(
        <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box', paddingTop: '64px' },
        }}
      >
        <Typography variant="h6" component="div" sx={{ flexGrow: 0, paddingLeft: '16px' }}>
          ReliefHub
        </Typography>
        <List>
          <ListItem  button onClick={() => changeVal(0)}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />{
             
            }
          </ListItem>
          <ListItem button onClick={() => changeVal(1)}>
            <ListItemIcon>
              <MapIcon />
            </ListItemIcon>
            <ListItemText primary="Map" />
          </ListItem>
          <ListItem button onClick={() => changeVal(2)}>
            <ListItemIcon>
              <BusinessIcon />
            </ListItemIcon>
            <ListItemText primary="Newsfeed" />
          </ListItem>
          <ListItem button onClick={() =>{changeVal(3);console.log(1) } 
          
          }>
            <ListItemIcon>
              <BusinessIcon />
            </ListItemIcon>
            <ListItemText primary="Rescue Agencies" />
          </ListItem>
        </List>
      </Drawer>
      );
  };

export default Sidebar;
