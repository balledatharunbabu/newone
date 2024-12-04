import React, { useRef, useCallback } from 'react';
import { ReactFlow, ReactFlowProvider, addEdge, useNodesState, useEdgesState, Controls, useReactFlow, Background } from 'reactflow';  // Import ReactFlowProvider
import 'reactflow/dist/style.css';
import Menu from './Menu'; // Import Sidebar
import {RestAdapter} from '../CustomNodes/Adapters'
import {IBMMQAdapter} from '../CustomNodes/Adapters'
import {KafkaAdapter} from '../CustomNodes/Adapters'
import {AmqAdapter} from '../CustomNodes/Adapters'

import {Modify,Selector,Target,Source} from '../CustomNodes/Stages'

import { DnDProvider, useDnD } from './DnDContext';


const nodeTypes = {
  kafka: KafkaAdapter, 
  rest:RestAdapter,
  ibmMQ:IBMMQAdapter,
  Amq:AmqAdapter,
  modify:Modify,
  selector:Selector,
  source:Source,
  target:Target

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

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
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
       data: { label: `Node of type: ${type}` }, // Pass label here
      };

      setNodes((nds) => nds.concat(newNode));
    },
    [screenToFlowPosition, type],
  );

  return (
    <div className="dndflow" style={{display:'flex'}}>
        <Menu></Menu>
      <div className="reactflow-wrapper" ref={reactFlowWrapper} style={{ height: '100vh', width: '88%'}}>

        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onDrop={onDrop}
          onDragOver={onDragOver}
          nodeTypes={nodeTypes}
          fitView
          style={{backgroundColor: "white"}}
        >
          <Background />
        
        </ReactFlow>
      </div>
    
    
    </div>
  );
};

export default () => (
<ReactFlowProvider>
    <DnDProvider>
      <DnDFlow />
    </DnDProvider>
  </ReactFlowProvider>
);
