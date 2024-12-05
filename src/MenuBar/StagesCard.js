import React, { Profiler, useState } from 'react';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import {
ListItemButton,
ListItemIcon,
Collapse,
Card, CardContent
} from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import PersonIcon from '@mui/icons-material/Person';


export default function StagesCard({ updateExpandedStage, expandedStage }) {

const handleClickStages = () => {
updateExpandedStage(!expandedStage);
};

return (
< Card
sx={{
// // boxShadow: '8px 8px 1000px rgba(0, 0, 0, 0.5)',
boxShadow: '8px 8px 1px rgba(0, 0, 0, 0.3)', // Initial shadow
transition: 'all 0.3s ease', // Smooth transition for hover effect
'&:hover': {
backgroundColor: 'rgba(0, 0, 255, 0.2)', // Background color on hover
borderTopRightRadius: '50px',
minHeight:'40%', // Transition to oval shape on hover
// boxShadow: '0px -8px 20px rgba(0, 0, 0, 0.2)'
},
}
}
>
<CardContent
sx={{
maxWidth: "230px",
padding: "0px",
boxShadow: '8px 8px 9px rgba(0, 0, 0, 0.1 )',
}}
>
<ListItemButton onClick={handleClickStages}
// disablePadding
sx={{
boxShadow: "inherit",
'&:hover': {
backgroundColor: '#434779',
color: "white",
},
}}
>
<ListItemIcon>
< Profiler />
</ListItemIcon>
<ListItemText primary="Stages" />
{expandedStage ? <ExpandLess /> : <ExpandMore />}
</ListItemButton>
<Collapse in={expandedStage} timeout="auto" unmountOnExit
sx={{ boxShadow: "initial" }}
>
<List component="div" disablePadding>
<ListItemButton sx={{
pl: 4,
'&:hover': {
backgroundColor: '#434779', // Background color on hover
borderTopRightRadius: '24px', // Transition to oval shape on hover
boxShadow: '8px 8px 100px rgba(0, 0, 0, 0.1)', // Enhanced shadow on hover
color: "white"
},
}}
>
<ListItemIcon>
<PersonIcon />
</ListItemIcon>
<ListItemText primary="InGate" />
</ListItemButton>
<ListItemButton sx={{
pl: 4,
'&:hover': {
backgroundColor: '#434779', // Background color on hover
borderTopRightRadius: '24px', // Transition to oval shape on hover
boxShadow: '8px 8px 100px rgba(0, 0, 0, 0.1)', // Enhanced shadow on hover
color: "white"
},
}}>
<ListItemIcon>
<PersonIcon />
</ListItemIcon>
<ListItemText primary="Convert" />
</ListItemButton>
<ListItemButton sx={{
pl: 4,
'&:hover': {
backgroundColor: '#434779', // Background color on hover
borderTopRightRadius: '24px', // Transition to oval shape on hover
boxShadow: '8px 8px 100px rgba(0, 0, 0, 0.1)', // Enhanced shadow on hover
color: "white"
},
}}>
<ListItemIcon>
<PersonIcon />
</ListItemIcon>
<ListItemText primary="routerFilp" />
</ListItemButton>
<ListItemButton sx={{
pl: 4,
'&:hover': {
backgroundColor: '#434779', // Background color on hover
borderTopRightRadius: '24px', // Transition to oval shape on hover
boxShadow: '8px 8px 100px rgba(0, 0, 0, 0.1)', // Enhanced shadow on hover
color: "white"
},
}}>
<ListItemIcon>
<PersonIcon />
</ListItemIcon>
<ListItemText primary="OutGate" />
</ListItemButton>
</List>
</Collapse>
</CardContent>
</Card >
)
};