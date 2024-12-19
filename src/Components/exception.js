

import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import '../Style/Configuration/exception.css';
import HeaderTwo from '../Components/headerTwo'
import { RestAdapter, IBMMQAdapter, KafkaAdapter, AmqAdapter } from '../CustomNodes/Adapters';
import { Modify, Selector, Target, Source } from '../CustomNodes/Stages';
import { RestOutAdapter, KafkaOutAdapter, IBMMQOutAdapter, AmqOutAdapter } from '../CustomNodes/OutBoundAdapters';
import ReactFlow, { ReactFlowProvider  } from "reactflow";
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
    const [flow, setflow] = useState({
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

        const scenarioDetailsUrl = `http://172.17.1.72:9090/exception?flowId=${flowId}&flowName=${flowName}&region=${region}`;
        axios.get(scenarioDetailsUrl)
            .then((response) => {
                setDetails(response.data);
                setViewExcepDetails(true);
            })
            .catch((error) => console.error('Error fetching data:', error));

            const exceptionFlowDetails = `http://172.17.1.72:9090/showFlows?flowId=${flowId}&flowName=${flowName}&region=${region}`;
                console.log(exceptionFlowDetails)
                axios.get(exceptionFlowDetails)
                    .then((response) => {
                        setflow( {
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

    return (
        <>
        <div className="mainGrid">
            <HeaderTwo></HeaderTwo>
            <div class="container" className="displayExcepDet">
            <div className='exceptionFlow' >
         <p>Flow</p>
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
                            <td><input className="tdInput" value={details?.originaMessageId || ''} readOnly /></td>
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
                            {JSON.stringify(details?.payload, null, 2) || ''}
                        </span>
                    </div>
                )}
                <button className="PayloadBtn" onClick={excepStack}>Error Message</button>
                {showExcepStack && (
                    <div className="ErrorDisplay">
                        <span style={{ height: '10rem', display: 'block', overflow: 'auto', scrollbarWidth: 'thin' }}>
                            {details?.errorMessage || ''}
                        </span>
                    </div>
                )}
            </div>
           
        </div>
         
         </>
    );
};

export default ExceptionDetails;

