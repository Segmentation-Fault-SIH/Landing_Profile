
"use client"
import React from 'react';

import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import MapIcon from '@mui/icons-material/Map';
import BusinessIcon from '@mui/icons-material/Business';
import Link from 'next/link';


const Navbar= ({ }) => {

    return( 
      <div className="flex h-full min-w-full bg-transparent">
 
    <div className="bg-transparent relative flex flex-row p-4 min-w-full shadow-lg">
    
      <ul className="flex flex-end items-end ">
        
        <li className="mb-2">
         <Link href='/profile'className="text-black text-xl hover:bg-gray-200 px-2 py-1 rounded">Profile</Link>
        </li>
        
      </ul>
    </div>
    </div>
    );

};

export default Navbar;
