

import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import '../Style/Configuration/exception.css';
import HeaderTwo from '../Components/headerTwo'
import { RestAdapter, IBMMQAdapter, KafkaAdapter, AmqAdapter } from '../CustomNodes/Adapters';
import { Modify, Selector, Target, Source } from '../CustomNodes/Stages';
import { RestOutAdapter, KafkaOutAdapter, IBMMQOutAdapter, AmqOutAdapter } from '../CustomNodes/OutBoundAdapters';
import ReactFlow, { ReactFlowProvider } from "reactflow";
import 'reactflow/dist/style.css';

const ExceptionDetails = () => {

    const nodeTypes = {
        kafka: KafkaAdapter,
        rest: RestAdapter,
        ibmMQ: IBMMQAdapter,
        Amq: AmqAdapter,
        Convert: Modify,
        RouteFlip: Selector,
        Ingate: Source,
        Outgate: Target,
        restout: RestOutAdapter,
        kafkaout: KafkaOutAdapter,
        ibmMQout: IBMMQOutAdapter,
        Amqout: AmqOutAdapter,
    };

    const location = useLocation();
    const navigate = useNavigate();



    const [details, setDetails] = useState({});
    const [flow, setFlow] = useState({
        flowId: "",
        flowName: "",
        region: "",
        stages: "",
        inbound: [],
        outbound: [],
        nodes: [],
        edges: [],
    });

    const [viewExcepDetails, setViewExcepDetails] = useState(false);
    const [showException, setShowException] = useState(false);
    const [showExcepStack, setShowExcepStack] = useState(false);
    const [payload, setPayload] = useState(false);

    const { flowId, flowName, region } = location.state || {};


    useEffect(() => {
        if (flowId && flowName && region) {
            getExceptionDetails(flowId, flowName, region);
        }
    }, [flowId, flowName, region]);


    // Fetch Exception Details
    const getExceptionDetails = (flowId, flowName, region) => {

        const scenarioDetailsUrl = `http://172.17.2.77:9090/exception?flowId=${flowId}&flowName=${flowName}&region=${region}`;
        axios.get(scenarioDetailsUrl)
            .then((response) => {
                setDetails(response.data);
                setViewExcepDetails(true);
            })
            .catch((error) => console.error('Error fetching data:', error));

        const exceptionFlowDetails = `http://172.17.2.77:9090/search?flowId=${flowId}&flowName=${flowName}&region=${region}`;
        console.log(exceptionFlowDetails)
        axios.get(exceptionFlowDetails)
            .then((response) => {
                setFlow({
                    flowId: flowId,
                    flowName: response.data.flowName,
                    region: response.data.region,
                    stages: response.data.stages,
                    inbound: response.data.inbound,
                    outbound: response.data.outbound,
                    nodes: response.data.nodes,
                    edges: response.data.edges,
                });
            })
            .catch((error) => console.error('Error fetching data:', error));
    };
    console.log(flow)
    const excepStack = () => setShowExcepStack(!showExcepStack);
    const displayPayload = () => setPayload(!payload);

    const fitViewOptions = {
        padding: 0.1, // Padding around the nodes when fitting the view
    };

console.log(details)
    useEffect(() => {
        if (flow.nodes.length > 0 && flow.edges.length > 0 && details?.exceptionRoute) {
            // Find the node that matches the exception route (case-insensitive)
            const failedNode = flow.nodes.find(
                (node) => node.data.label.toLowerCase() === details?.exceptionRoute?.toLowerCase()
            );

            console.log("Failed Node:", failedNode);

            if (failedNode) {
                // Update edges to highlight the right edge (edges where the node is the source)
                const updatedEdges = flow.edges.map((edge) => {
                    // Check if the edge originates from the failed node (i.e., the source)
                    if (edge.source === failedNode.id) {
                        return {
                            ...edge,
                            style: {
                                stroke: "red",
                                strokeWidth: 2,
                                strokeDasharray: "5,5"  // Create a dashed line
                            },
                            label: "❌",  // Add a wrong symbol (exclamation mark or custom icon)
                            // Change edge color to red
                        };
                    }
                    return edge;
                });

                console.log("Updated Edges:", updatedEdges);

                setFlow((prevFlow) => ({
                    ...prevFlow,
                    edges: updatedEdges, // Update the edges with modified styles
                }));
            }
        }
    }, [flow.nodes, flow.edges, details?.exceptionRoute]);




    return (
        <>
            <div className="mainGrid">
                <HeaderTwo></HeaderTwo>
                <div className="displayExcepDet">
                    <div className='exceptionFlow' >
                        <ReactFlowProvider>
                            <ReactFlow
                                nodes={flow.nodes}
                                edges={flow.edges}
                                nodeTypes={nodeTypes}
                                fitView
                                fitViewOptions={fitViewOptions}
                                zoomOnScroll={false}
                                zoomOnPinch={false}
                                panOnDrag={false}
                                proOptions={{ hideAttribution: true }} // remove reactflow
                            />
                        </ReactFlowProvider>
                    </div>
                    {/* <p>Exception Info</p> */}
                    <table>
                        <tbody>
                            <tr>
                                <td><span style={{ color: 'black' }}>Message ID:</span></td>
                                <td><input className="tdInput" value={details?.messageId || ''} readOnly /></td>
                            </tr>
                            <tr>
                                <td><span style={{ color: 'black' }}>Timestamp:</span></td>
                                <td><input className="tdInput" value={details?.exceptionTimeStamp || ''} readOnly /></td>
                            </tr>
                            <tr>
                                <td><span style={{ color: 'black' }}>Exception Route:</span></td>
                                <td><input className="tdInput" value={details?.exceptionRoute || ''} readOnly /></td>
                            </tr>
                        </tbody>
                    </table>
                    <button className="PayloadBtn" onClick={displayPayload}>Payload</button>
                    {payload && (
                        <div className="payloadDisplay">
                            <span style={{ height: '3rem', display: 'block', overflowY: 'auto', overflowX: 'auto', scrollbarWidth: 'thin' }}>
                                {/* {details?.payload || ''} */}
                                {JSON.stringify(details?.payload, null, 2) || ''}
                            </span>
                        </div>
                    )}
                    <button className="PayloadBtn" onClick={excepStack}>Error Message</button>
                    {showExcepStack && (
                        <div className="ErrorDisplay">
                            <span style={{ height: '10rem', display: 'block', overflow: 'auto', scrollbarWidth: 'thin' }}>
                            {details?.errorMessage || ''}
                            {/* {JSON.stringify(details?.errorMessage, null, 2) || ''} */}
                            </span>
                        </div>
                    )}
                </div>

            </div>

        </>
    );
};

export default ExceptionDetails;

