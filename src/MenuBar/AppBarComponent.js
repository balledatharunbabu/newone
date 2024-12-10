import React, { useState ,useContext} from "react";
import {AppBar, Toolbar, IconButton,Box } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import Folders from "./Folders.js";
import Adaptercontext from "../Context/Adaptercontext.js";
export default function AppBarComponent() {

    const {amqadapter,restadapter,ibmadapter,kafkaadapter}=useContext(Adaptercontext)

    // console.log(flownodes)
    // console.log(flowedges)

//     const handleEvent = () => {
// console.log(amqadapter)
// console.log(ibmadapter)
// console.log(kafkaadapter)
// console.log(restadapter)

//     }

const saveStratergy = async () => {
    // const stageNodes = flownodes.filter((flownodes) =>
    //     ['Convert', 'Outgate', 'Ingate', 'RouteFlip'].includes(flownodes.type)
    //     );
        
    //     // Create a dot-separated string of node labels
    //     const stagesArray = stageNodes.map((flownodes) => flownodes.data.label).join('.');
    //     console.log(stagesArray)
    try {
        let response = await fetch("", {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ amqadapter, restadapter, ibmadapter, kafkaadapter}),
        });
        const res = await response.json();
        console.log("Scenario Creation is success", res);
    } catch (error) {
        console.log("Error posting Scenario Creation", error.message);
    }
};

    // State to manage Drawer open/close
    const [drawerOpen, setDrawerOpen] = useState(true);

    // Toggle the drawer
    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };

    return (

        <AppBar sx={{ flexGrow: 1, height: '10vh', backgroundColor: '#434779', zIndex: 200000}}>
            <Toolbar display="flex" alignItems="center" >
                <IconButton
                    size="large"
                    edge="start"
                    color="blue"
                    aria-label="open drawer"
                    sx={{ mr: 2 }}
                   onClick={toggleDrawer}
                ><MenuIcon style={{color:'white'}}/>
                </IconButton>
                <Box mr={50} />
                
                <IconButton
                    size="small"
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    borderRadius="1%" // Start with oval shape
                    sx={{
                        mr: 1,
                        boxShadow: '8px 4px 6px rgba(0, 0, 0, 0.2)', // Initial shadow
                        transition: 'all 1.5s ease', // Smooth transition for shape and shadow
                        backgroundColor: 'white', // Light background color
                        borderRadius: '8px', // Start with rectangle shape
                        '&:hover': {
                            backgroundColor: 'white', // Background color on hover
                            borderRadius: '50%', // Transition to oval shape on hover
                            boxShadow: '5px 8px 100px rgba(0, 0, 0, 0.45)', // Enhanced shadow on hover
                        },
                    }}
                ><Typography
                    fontSize="20"
                    noWrap
                    // component="div"
                    sx={{ display: { xs: 'none', sm: 'block' ,color:'black'} }}
                   
                >
                        CREATE
                    </Typography>
                </IconButton>
                <Box mr={50} />
                <IconButton
                    size="small"
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    borderRadius="1%" // Start with oval shape
                    sx={{
                        mr: 1,
                        boxShadow: '8px 4px 6px rgba(0, 0, 0, 0.2)', // Initial shadow
                        transition: 'all 1.5s ease', // Smooth transition for shape and shadow
                        backgroundColor: 'white', // Light background color
                        borderRadius: '8px', // Start with rectangle shape
                        '&:hover': {
                            backgroundColor: 'white', // Background color on hover
                            borderRadius: '50%', // Transition to oval shape on hover
                            boxShadow: '5px 8px 100px rgba(0, 0, 0, 0.45)', // Enhanced shadow on hover
                        },
                    }}  onClick={saveStratergy}
                ><Typography
                    fontSize="20"
                    noWrap
                    // component="div"
                    sx={{ display: { xs: 'none', sm: 'block' ,color:'black'} }}
                   
                >
                        Save 
                    </Typography>
                </IconButton>
            </Toolbar>

            <Folders
                drawerOpen={drawerOpen}
                toggleDrawer={toggleDrawer}
                sx={{
                    Padding: "10%"
                }} />
        </AppBar>
    )

}