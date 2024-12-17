import React, { useState ,useContext} from "react";
import {AppBar, Toolbar, IconButton,Box } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import Folders from "./Folders.js";
import Adaptercontext from "../Context/Adaptercontext.js";
export default function AppBarComponent() {

    const {amqadapter,restadapter,ibmadapter,kafkaadapter,flownodes,flowedges,amqadapterout,restadapterout,ibmadapterout,kafkaadapterout}=useContext(Adaptercontext)

   

const saveStratergy = async () => {

    console.log(JSON.stringify(kafkaadapterout))
  const stageNodes = flownodes.filter((flownodes) =>
    ['Convert', 'Outgate', 'Ingate', 'RouteFlip'].includes(flownodes.type)
    );
    console.log(stageNodes)
    
  const INNodes = flownodes.filter((flownodes) =>
    ['Amq', 'ibmMQ', 'rest', 'kafka'].includes(flownodes.type)

    );
    console.log(INNodes)


    const OutNodes = flownodes.filter((flownodes) =>
        ['restout', 'kafkaout', 'ibmMQout', 'Amqout'].includes(flownodes.type)
        );
        console.log(OutNodes)
        
        // Create a dot-separated string of node labels
        const stagesArray = stageNodes.map((flownodes) => flownodes.data.label).join('.');
   
        const Inbound = INNodes.find((node) => node.type === 'Amq') ? amqadapter 
                        :INNodes.find((node) => node.type === 'ibmMQ')?ibmadapter
                        :INNodes.find((node) => node.type === 'kafka')?kafkaadapter
                        :INNodes.find((node) => node.type === 'rest')?restadapter:null;
        
      
        const Outbound = OutNodes.find((node) => node.type === 'Amqout') ? amqadapterout 
                        : OutNodes.find((node) => node.type === 'ibmMQout')?ibmadapterout
                        : OutNodes.find((node) => node.type === 'kafkaout')?kafkaadapterout
                        : OutNodes.find((node) => node.type === 'restout')?restadapterout:null;
      
 console.log(Inbound)
    const flowData = {
        stages: stagesArray,
        Inbound,
        Outbound,
        flownodes,
        flowedges

        };
        console.log(JSON.stringify(flowData))
        let response = await fetch("http://172.17.1.72:9090/stream", {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            // body: JSON.stringify( {amqadapter,kafkaadapter}),
            body:JSON.stringify(flowData)

        });

        // const res = await response.json();
        // console.log(res)
        // console.log("Scenario Creation is success", res);
   
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