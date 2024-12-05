import React, { useState } from "react";
import { Box, Toolbar, IconButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import Folders from "./Folders.js";

export default function AppBarComponent() {

const handleEvent = (event) => {

}

// State to manage Drawer open/close
const [drawerOpen, setDrawerOpen] = useState(true);

// Toggle the drawer
const toggleDrawer = () => {
setDrawerOpen(!drawerOpen);
};

return (

<Box sx={{ flexGrow: 1 ,height:'10vh'}}>
<Toolbar display="flex" alignItems="center" >
<IconButton
size="large"
edge="start"
color="blue"
aria-label="open drawer"
sx={{ mr: 2 }}
onClick={toggleDrawer}
><MenuIcon />
</IconButton>
<Box mr={5} />
<IconButton
size="large"
edge="start"
color="inherit"
aria-label="open drawer"
borderRadius="1%" // Start with oval shape
sx={{
mr: 1,
boxShadow: '8px 4px 6px rgba(0, 0, 0, 0.2)', // Initial shadow
transition: 'all 1.5s ease', // Smooth transition for shape and shadow
backgroundColor: 'rgba(0, 0, 255, 0.1)', // Light background color
borderRadius: '8px', // Start with rectangle shape
'&:hover': {
backgroundColor: 'rgba(0, 0, 255, 0.2)', // Background color on hover
borderRadius: '50%', // Transition to oval shape on hover
boxShadow: '5px 8px 100px rgba(0, 0, 0, 0.45)', // Enhanced shadow on hover
},
}}
><Typography
variant="h6"
noWrap
// component="div"
sx={{ display: { xs: 'none', sm: 'block' } }}
onClick={() => handleEvent}
>
CONFIG
</Typography>
</IconButton>
<Box mr={5} />
<IconButton
size="large"
edge="start"
color="inherit"
aria-label="open drawer"
borderRadius="1%" // Start with oval shape
sx={{
mr: 1,
boxShadow: '8px 4px 6px rgba(0, 0, 0, 0.2)', // Initial shadow
transition: 'all 1.5s ease', // Smooth transition for shape and shadow
backgroundColor: 'rgba(0, 0, 255, 0.1)', // Light background color
borderRadius: '8px', // Start with rectangle shape
'&:hover': {
backgroundColor: 'rgba(0, 0, 255, 0.2)', // Background color on hover
borderRadius: '50%', // Transition to oval shape on hover
boxShadow: '5px 8px 100px rgba(0, 0, 0, 0.45)', // Enhanced shadow on hover
},
}}
><Typography
variant="h6"
noWrap
// component="div"
sx={{ display: { xs: 'none', sm: 'block' } }}
onClick={() => handleEvent}
>
CREATE
</Typography>
</IconButton>
<Box mr={5} />
<IconButton
size="large"
edge="start"
color="inherit"
aria-label="open drawer"
borderRadius="1%" // Start with oval shape
sx={{
mr: 1,
boxShadow: '8px 4px 6px rgba(0, 0, 0, 0.2)', // Initial shadow
transition: 'all 1.5s ease', // Smooth transition for shape and shadow
backgroundColor: 'rgba(0, 0, 255, 0.1)', // Light background color
borderRadius: '8px', // Start with rectangle shape
'&:hover': {
backgroundColor: 'rgba(0, 0, 255, 0.2)', // Background color on hover
borderRadius: '50%', // Transition to oval shape on hover
boxShadow: '5px 8px 100px rgba(0, 0, 0, 0.45)', // Enhanced shadow on hover
},
}}
><Typography
variant="h6"
noWrap
// component="div"
sx={{ display: { xs: 'none', sm: 'block' } }}
onClick={() => handleEvent}
>
VIEW
</Typography>
</IconButton>
</Toolbar>

<Folders
drawerOpen={drawerOpen}
toggleDrawer={toggleDrawer}
sx={{
Padding: "10%"
}} />
</Box>
)

}