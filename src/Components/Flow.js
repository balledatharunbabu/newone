import React, { useRef, useCallback, useState, useContext } from 'react';
import { ReactFlow, ReactFlowProvider, addEdge, useNodesState, useEdgesState, useReactFlow, Background } from 'reactflow';
import 'reactflow/dist/style.css';

import { RestAdapter, IBMMQAdapter, KafkaAdapter, AmqAdapter } from '../CustomNodes/Adapters';
import { Modify, Selector, Target, Source } from '../CustomNodes/Stages';
import { RestOutAdapter, KafkaOutAdapter, IBMMQOutAdapter, AmqOutAdapter } from '../CustomNodes/OutBoundAdapters';
import { DnDProvider, useDnD } from './DnDContext';
import Folders from '../MenuBar/Folders'
import Header from '../MenuBar/Header'
import Folder from  '../MenuBar/Folders'
import AmqConfig from '../AdapterConfigurations/amqConfig'
import AmqConfigout from '../AdapterConfigurations/amqConfigout'
import KafkaConfig from '../AdapterConfigurations/kafkaConfig';
import KafkaConfigout from '../AdapterConfigurations/kafkaConfigout';
import IbmMqConfig from '../AdapterConfigurations/ibmMqConfig';
import IbmMqConfigout from '../AdapterConfigurations/ibmMqConfigout';
import RestConfig from '../AdapterConfigurations/restConfig';
import RestConfigout from '../AdapterConfigurations/restConfigout';
import { useEffect } from 'react';
import AdapterContextProvider from '../Context/AdpaterContextProvider'
import Adaptercontext from '../Context/Adaptercontext';

import IngateConfig from '../StagesConfig/Ingate'

import Convert from '../StagesConfig/Convert'
import ConvertData from '../StagesConfig/Convert';
import RouteFlipData from '../StagesConfig/RouteFlip'
import OutgateData from '../StagesConfig/Outgate'

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


const initialNodes = [];
let id = 0;
const getId = () => `dndnode_${id++}`;

const DnDFlow = () => {
  const reactFlowWrapper = useRef(null);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const { screenToFlowPosition } = useReactFlow();
  const [type] = useDnD();


      const{setflownodes}=useContext(Adaptercontext)
      const{setflowedges}=useContext(Adaptercontext)


      setflownodes(nodes)
      setflowedges(edges)



  // if(nodes.length==0){
  //   setDisplay(!display)
  // }

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
  const [Amqout, setAmqout] = useState(false);
  const [Kafka, setKafka] = useState(false);
  const [Kafkaout, setKafkaout] = useState(false);
  const [Rest, setRest] = useState(false);
  const [Restout, setRestout] = useState(false);
  const [Ibm, setIbm] = useState(false);
  const [Ibmout, setIbmout] = useState(false);

  const [Ingate, setIngate] = useState(false);

  const[Convert,setCovert]=useState(false)

  const[RouteFlip,setRouteFlip]=useState(false)

  const[Outgate,setOutgate]=useState(false)

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
        data: { label: type  },
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
        if (node.type === 'Amq') {
          return !prevAmq; // Toggle Amq state
        }
   return false;
      });
      setAmqout((prevAmq) => {
        if (node.type === 'Amqout') {
          return !prevAmq; // Toggle Amq state
        }
   return false;
      });


      setKafka((prevKafka) => {
        if (node.type === 'kafka' ) {
          return !prevKafka;
        }
        return false;
      });
      setKafkaout((prevKafka) => {
        if (node.type === 'kafkaout') {
          return !prevKafka;
        }
        return false;
      });
  
      setRest((prevRest) => {
        if (node.type === 'rest') {
          return !prevRest; 
        }
        return false; 
      });

      setRestout((prevRest) => {
        if (node.type === 'restout') {
          return !prevRest; 
        }
        return false; 
      });
  
      setIbm((prevIbm) => {
        if (node.type === 'ibmMQ' ) {
          return !prevIbm; 
        }
        return false; 
      });
      setIbmout((prevAmq) => {
        if (node.type === 'ibmMQout') {
          return !prevAmq; // Toggle Amq state
        }
   return false;
      });
      setIngate((prevAmq) => {
        if (node.type === 'Ingate') {
          return !prevAmq; // Toggle Amq state
        }
   return false;
      });

      setCovert((prevAmq) => {
        if (node.type === 'Convert') {
          return !prevAmq; // Toggle Amq state
        }
   return false;
      });
      setRouteFlip((prevAmq) => {
        if (node.type === 'RouteFlip') {
          return !prevAmq; // Toggle Amq state
        }
   return false;
      });
      setOutgate((prevAmq) => {
        if (node.type === 'Outgate') {
          return !prevAmq; // Toggle Amq state
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
        style={{ height: '70vh', width: '81.5%',marginLeft:'18.5%' ,overflow:'hidden',display:'flex'}}>

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
            style={{ backgroundColor:'white'}}
          >
     
          </ReactFlow>
        </div>
      </div>
  
      <div>
      {Amq && ( <div><AmqConfig /></div>)}

      {Amqout && ( <div><AmqConfigout /></div>)}
      
      {Kafka && <div><KafkaConfig/></div>}
      {Kafkaout && <div><KafkaConfigout/></div>}

      {Ibm && ( <div><IbmMqConfig /></div>)}
      {Ibmout && ( <div><IbmMqConfigout /></div>)}

      {Rest && <div><RestConfig/></div>}
      {Restout && <div><RestConfigout/></div>}

      {Ingate && <div><IngateConfig></IngateConfig></div>}

      {Convert && <div><ConvertData></ConvertData ></div>}
      
      {RouteFlip && <div><RouteFlipData></RouteFlipData></div>}

      {Outgate && <div><OutgateData></OutgateData></div>}
      </div>
    </>
  );
};

export default () => (
  // <ReactFlowProvider>
  //   <DnDProvider>
  //     <AdapterContextProvider>
  //       <DnDFlow />
  //     </AdapterContextProvider>
  //   </DnDProvider>
  // </ReactFlowProvider>
    <ReactFlowProvider>
   <DnDProvider>
     <AdapterContextProvider>
       <DnDFlow />
     </AdapterContextProvider>
   </DnDProvider>
 </ReactFlowProvider>
);