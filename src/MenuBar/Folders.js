import React, { useState } from 'react';
import { Drawer, Divider, Box } from '@mui/material';
import StagesCard from './StagesCard';
import InEndPointCard from './InEndPointCard';
import OutEndPointCard from './OutEndPointCard';



export default function Folders({ drawerOpen, toggleDrawer }) {

// State to track open/close status
const [inexpandedEndPoint, setInExpandedEndPoint] = useState(true);

// State to track open/close status
const [outexpandedEndPoint, setOutExpandedEndPoint] = useState(true);

//Stages Card
const [expandedStages, setExpandedStages] = useState(true);

// Toggle open state
const handleClickInEndPoints = () => {
setInExpandedEndPoint(!inexpandedEndPoint);
};

const handleClickStages = () => {
setExpandedStages(!expandedStages);
};

const handleClickOutEndPoints = () => {
setOutExpandedEndPoint(!outexpandedEndPoint);
};


return (
<Drawer
variant="persistent"
anchor="left"
open={drawerOpen} // Controls if the Drawer is open or closed
onClose={toggleDrawer} // Close the drawer when clicking outside
sx={{
'& .MuiDrawer-paper': {
borderRadius: '16px',
position: 'absolute',
top: '80px', // Adjust this value based on your AppBar height (default is 64px for AppBar in desktop view)
paddingTop: '16px', // Padding inside the drawer
paddingBottom: '16px',
left: '10px', // Align with the MenuIcon
width: '18%', // Adjust as per your design
boxSizing: 'border-box',
overflow: 'auto',
height:'100%'
},
}}
>
    <Box sx={{msOverflowY:'auto'}}>
        <InEndPointCard updateInExpandedEndPoint={handleClickInEndPoints} inexpandedEndPoint={inexpandedEndPoint} />
        <Divider sx={{ backgroundColor: 'black', height: 2 }} />
        <StagesCard updateExpandedStage={handleClickStages} expandedStage={expandedStages} />
        <Divider sx={{ backgroundColor: 'black', height: 2 }} />
        <OutEndPointCard updateOutExpandedStage={handleClickOutEndPoints} outexpandedEndPoint={outexpandedEndPoint} />
    </Box>


</Drawer>

);
}