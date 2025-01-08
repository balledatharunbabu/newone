import React, { useState ,useContext} from "react";
import { Toolbar, IconButton} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import Folders from "./Folders.js";
import Adaptercontext from "../Context/Adaptercontext.js";
export default function AppBarComponent() {

    const {amqadapter,restadapter,ibmadapter,kafkaadapter,flownodes,flowedges,amqadapterout,restadapterout,ibmadapterout,kafkaadapterout,transdata}=useContext(Adaptercontext)


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

        const Transdata=transdata
      
 console.log(Inbound)
    const flowData = {
        stages: stagesArray,
        Inbound,
        Outbound,
        flownodes,
        flowedges,
        Transdata

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

        <>
        <nav class="navbar navbar-expand-lg fixed-top" id="headerTwoDiv">
            <div class="container-fluid d-flex justify-content-center align-items-center" id="alignItems">
                <Toolbar>
                    <IconButton
                        size="small"
                        edge="start"
                        color="blue"
                        aria-label="open drawer"
                        onClick={toggleDrawer}
                    ><MenuIcon style={{ color: 'white' }} />
                    </IconButton>
                </Toolbar>
                <Folders
                    drawerOpen={drawerOpen}
                    toggleDrawer={toggleDrawer}
                />
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav ms-auto">
                    <li class="nav-item me-5" onClick={saveStratergy}>
                            <a class="nav-link active" aria-current="page">
                                <i class="bi bi-save"></i> Save
                            </a>
                        </li>
                        <li class="nav-item me-5">
                            <a class="nav-link active" aria-current="page" href="/viewDetails">
                                <i class="bi bi-eye"></i> Display
                            </a>
                        </li>
                        <li class="nav-item me-5">
                            <a class="nav-link active" href="/auditFilter">
                                <i class="bi bi-file-text"></i> Logs</a>
                        </li>
                        <li class="nav-item me-5">
                            <a class="nav-link active" href="/exceptionFilter">
                                <i class="bi bi-exclamation-circle"></i> Faults</a>
                        </li>
                        <li class="nav-item me-5">
                            <a class="nav-link active" href="/replayDetails">
                                <i class="bi bi-arrow-repeat"></i> Replay</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    </>

    )

}