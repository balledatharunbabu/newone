import React, { useState, useContext } from "react";
import { Toolbar, IconButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import Folders from "./Folders.js";
import Adaptercontext from "../Context/Adaptercontext.js";
export default function AppBarComponent() {

    const { amqadapter, restadapter, ibmadapter, kafkaadapter, flownodes, flowedges, transdata, AmqFinalOutboundForm,
        IBMFinalOutboundForm, KafkaFinalOutboundForm, RestFinalOutboundForm
    } = useContext(Adaptercontext)



    const saveStratergy = async () => {

        console.log("flownodes data 001 --> ", flownodes);
        // for (let i = 0; i < flownodes.length; i++) {
        //     // console.log("flownodes --> ", flownodes[i].id.split('_')[1]);
        //     flownodes[i]=`dndnode_${i}`;
        // }
        console.log("flownodes data --> ", flownodes);
        console.log("flownodes edges --> ", flowedges);

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

        const Stages = ['Ingate', 'Convert', 'RouteFlip', 'Outgate']

        const stagesArray = stageNodes.map((flownodes) => flownodes.data.label).join('.');

        const checkStage = stagesArray.split(".")

        const array = Stages.filter(stage => checkStage.includes(stage))

        const filterarray = array.map((stages) => stages).join('.');

        console.log(filterarray)


        const Inbound = INNodes.find((node) => node.type === 'Amq') ? amqadapter
            : INNodes.find((node) => node.type === 'ibmMQ') ? ibmadapter
                : INNodes.find((node) => node.type === 'kafka') ? kafkaadapter
                    : INNodes.find((node) => node.type === 'rest') ? restadapter : null;
        const Outbound = []

        // const Outbound = OutNodes.find((node) => node.type === 'Amqout') ? amqadapterout 
        //                 : OutNodes.find((node) => node.type === 'ibmMQout')?ibmadapterout
        //                 : OutNodes.find((node) => node.type === 'kafkaout')?kafkaadapterout
        //                 : OutNodes.find((node) => node.type === 'restout')?restadapterout:null;


        let validateOutBoundsTypes = true;
        let listOfOutBoundTypes = [];
        OutNodes.forEach((data, index) => {
            console.log("data index", data.type);
            if (validateOutBoundsTypes === true) {
                listOfOutBoundTypes.push(data.type);
            }
            // if (data.type.toLowerCase() === 'outgate') {
            //     validateOutBoundsTypes = true;
            // }
        })

        console.log(listOfOutBoundTypes)

        

        for (let i = 0; i < listOfOutBoundTypes.length; i++) {
            if (OutNodes.find((node) => node.type === listOfOutBoundTypes[i])) {
                console.log(listOfOutBoundTypes[i])
                // console.log( node.type)

                if (listOfOutBoundTypes[i] === 'Amqout' ) {
                    Outbound.push(AmqFinalOutboundForm)


                }
                else if (listOfOutBoundTypes[i] === 'ibmMQout') {
                    Outbound.push(IBMFinalOutboundForm)
                }
                else if (listOfOutBoundTypes[i] === 'kafkaout') {
                    Outbound.push(KafkaFinalOutboundForm)
                }
                else if (listOfOutBoundTypes[i] === 'restout') {
                    Outbound.push(RestFinalOutboundForm)
                }
            }


        }

        const newOutbound = [];

        for (let i = 0; i < Outbound.length; i++) {
            if (!newOutbound.includes(Outbound[i])) {
                newOutbound.push(Outbound[i]);
            }
        }
        

        const Transdata = transdata

        console.log(Outbound)


        const flowData = {
            stages: filterarray,
            Inbound,
            Outbound:newOutbound,
            flownodes,
            flowedges,
            Transdata

        };
        console.log(JSON.stringify(flowData))
        let response = await fetch("http://backend:9090/stream", {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            // body: JSON.stringify( {amqadapter,kafkaadapter}),
            body: JSON.stringify(flowData),
            // Outbound : []
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