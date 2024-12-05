import React, { useRef, useCallback, useState } from 'react';
import { ReactFlow, ReactFlowProvider, addEdge, useNodesState, useEdgesState, useReactFlow, Background } from 'reactflow';
import 'reactflow/dist/style.css';
import Menu from './Menu';
import { RestAdapter, IBMMQAdapter, KafkaAdapter, AmqAdapter } from '../CustomNodes/Adapters';
import { Modify, Selector, Target, Source } from '../CustomNodes/Stages';
import { RestOutAdapter, KafkaOutAdapter, IBMMQOutAdapter, AmqOutAdapter } from '../CustomNodes/OutBoundAdapters';
import { DnDProvider, useDnD } from './DnDContext';
import Folders from '../MenuBar/Folders'
import Header from '../MenuBar/Header'
import AmqConfig from '../AdapterConfigurations/amqConfig'
import KafkaConfig from '../AdapterConfigurations/kafkaConfig';
import IbmMqConfig from '../AdapterConfigurations/ibmMqConfig';
import RestConfig from '../AdapterConfigurations/restConfig';
const nodeTypes = {
  kafka: KafkaAdapter,
  rest: RestAdapter,
  ibmMQ: IBMMQAdapter,
  Amq: AmqAdapter,
  modify: Modify,
  selector: Selector,
  source: Source,
  target: Target,
  restout: RestOutAdapter,
  kafkaout: KafkaOutAdapter,
  ibmMQout: IBMMQOutAdapter,
  Amqout: AmqOutAdapter,
};


const initialNodes = [];
let id = 0;
const getId = () => `dndnode_${id++}`;

const DnDFlow = () => {
  const reactFlowWrapper = useRef(null);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const { screenToFlowPosition } = useReactFlow();
  const [type] = useDnD();


  // const isValidConnection = (connection) => {
  //   console.log(connection.source); 
  //   if (connection.source === 'Amq' && connection.target === 'source') {
  //     return true;
  //   }
  //   return false;
  // };
  

  const onConnectStart = (_, { nodeId, handleType }) =>
    console.log('on connect start', { nodeId, handleType });
  const onConnectEnd = (event) => console.log('on connect end', event);


 
  const[selectedEdgeType,setSelectedEdgeType]=useState('');
  const [selectedNodeType, setSelectedNodeType] = useState('');
  const [Amq, setAmq] = useState(false);
  const [Kafka, setKafka] = useState(false);
  const [Rest, setRest] = useState(false);
  const [Ibm, setIbm] = useState(false);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge({ ...params, type: 'straight' }, eds)),
    [],
  );

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();

      if (!type) {
        return;
      }

      const position = screenToFlowPosition({
        x: event.clientX,
        y: event.clientY,
      });

      const newNode = {
        id: getId(),
        type,
        position,
        data: { label: `Node of type: ${type}` },
      };

      setNodes((nds) => nds.concat(newNode));

      // Update the last dragged node type
   
    },
    [screenToFlowPosition, type],
  );

  const onNodeClick = useCallback(
    (_, node) => {
      // Update the selected node type when a node is clicked
      setSelectedNodeType(node.type);

      setAmq((prevAmq) => {
        if (node.type === 'Amq' ||node.type === 'Amqout') {
          return !prevAmq; // Toggle Amq state
        }
        return false; // Reset to false if it's not 'Amq'
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

  return (
    <>
      <div className="dndflow" style={{ }}>
      <Header></Header>
        <div className="reactflow-wrapper" ref={reactFlowWrapper} 
        style={{ height: '60vh', width: '82%',marginLeft:'18%' ,overflow:'hidden'}}>
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            onDrop={onDrop}
            onDragOver={onDragOver}
            onNodeClick={onNodeClick}
            onConnectStart={onConnectStart}
            onConnectEnd={onConnectEnd}
           // isValidConnection={isValidConnection}
            nodeTypes={nodeTypes}

            fitView
            style={{ backgroundColor: 'white' }}
          >
            <Background />
          </ReactFlow>
        </div>
      </div>
      <div>
      {Amq && ( <div><AmqConfig /></div>)}
      {Kafka && <div><KafkaConfig/></div>}
      {Ibm && ( <div><IbmMqConfig /></div>)}
      {Rest && <div><RestConfig/></div>}
      </div>
    </>
  );
};

export default () => (
  <ReactFlowProvider>
    <DnDProvider>
      <DnDFlow />
    </DnDProvider>
  </ReactFlowProvider>
);