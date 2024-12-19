import React, { useState, useCallback } from "react";
import axios from "axios";
import ReactFlow from "reactflow";
import 'reactflow/dist/style.css';
import { RestAdapter, IBMMQAdapter, KafkaAdapter, AmqAdapter } from '../CustomNodes/Adapters';
import { Modify, Selector, Target, Source } from '../CustomNodes/Stages';
import { RestOutAdapter, KafkaOutAdapter, IBMMQOutAdapter, AmqOutAdapter } from '../CustomNodes/OutBoundAdapters';
import AmqConfig from '../AdapterConfigurations/amqConfig'
import KafkaConfig from '../AdapterConfigurations/kafkaConfig';
import IbmMqConfig from '../AdapterConfigurations/ibmMqConfig';
import RestConfig from '../AdapterConfigurations/restConfig';
import HeaderTwo from '../Components/headerTwo'
const View= () =>
{
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
        
        const[selectedEdgeType,setSelectedEdgeType]=useState('');
        const [selectedNodeType, setSelectedNodeType] = useState('');
        const [Amq, setAmq] = useState(false);
        const [Kafka, setKafka] = useState(false);
        const [Rest, setRest] = useState(false);
        const [Ibm, setIbm] = useState(false);
        
        const onNodeClick = useCallback(
        (_, node) => {
        // Update the selected node type when a node is clicked
        setSelectedNodeType(node.type);
        
        setAmq((prevAmq) => {
        if (node.type === 'Amq' ||node.type === 'Amqout') {
        return !prevAmq; // Toggle Amq state
        }
        return false;
        });
        
        setKafka((prevKafka) => {
        if (node.type === 'kafka' ||node.type === 'kafkaout') {
        return !prevKafka;
        }
        return false;
        });
        
        setRest((prevRest) => {
        if (node.type === 'rest' ||node.type === 'restout') {
        return !prevRest;
        }
        return false;
        });
        
        setIbm((prevIbm) => {
        if (node.type === 'ibmMQ' ||node.type === 'ibmMQout') {
        return !prevIbm;
        }
        return false;
        });
        },
        [],
        );
        
        // Get parameter
        const [streamId, setStreamId] = useState("");
        const handleStreamIdChange = (event) => {
        setStreamId(event.target.value);
        };
        
        // Get API
        const [flowData, setFlowData] = useState({
        flowId: "",
        flowName: "",
        region: "",
        stages: "",
        inbound: [],
        outbound: [],
        nodes: [],
        edges: [],
        });
        const handleViewSubmit = async (event) => {
        event.preventDefault();
        try {
        const response = await axios.get(`http://localhost:9090/flowStreams?flowId=${streamId}`);
        console.log(response.data);
        setFlowData( {
        flowId: streamId,
        flowName: response.data.flowName,
        region: response.data.region,
        stages: response.data.stages,
        inbound: response.data.inbound,
        outbound: response.data.outbound,
        nodes: response.data.nodes,
        edges: response.data.edges,
        });
        
        // const viewFlow
        
        } catch (error) {
        console.error("Error fetching flow data:", error);
        }
        };
        
        // const nodesRender(
        
        // );
        
        return (
        <div>
        <h1>view</h1>
        <form onSubmit={handleViewSubmit}>
        <label htmlFor="inputField">streamId: </label>
        <input
        type="text"
        id="streamId"
        value={streamId}
        onChange={handleStreamIdChange}
        />
        <button type="submit">View</button>
        </form>
        <div style={{height: '100vh'}}>
        <ReactFlow
        nodes={flowData.nodes}
        edges={flowData.edges}
        onNodeClick={onNodeClick}
        nodeTypes={nodeTypes}
        />
        </div>
        <div>
        {Amq && ( <div><AmqConfig /></div>)}
        {Kafka && <div><KafkaConfig/></div>}
        {Ibm && ( <div><IbmMqConfig /></div>)}
        {Rest && <div><RestConfig/></div>}
        </div>
        <pre>{JSON.stringify(flowData, null, 2)}</pre>
        {/* <ul>
        {flowData.nodes.map((node, index) => (
        <li key={index}>
        <h3>{node.data.label}</h3>
        <p>Type: {node.type}</p>
        <p>Position: x: {node.position.x}, y: {node.position.y}</p>
        <p>Width: {node.width}, Height: {node.height}</p>
        <p>Selected: {node.selected ? "Yes" : "No"}</p>
        <p>Dragging: {node.dragging ? "Yes" : "No"}</p>
        </li>
        ))}
        </ul> */}
        </div>
        );
        }
export default View;