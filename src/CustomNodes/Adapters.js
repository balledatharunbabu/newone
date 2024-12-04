import React from 'react';
import { Handle, Position } from 'reactflow';
export  function AmqAdapter() {
  
  return (
    <div style={{ padding: '1px', border: '1px solid black', borderRadius: '1px',height:'70px',width:'50px' }}>
      <img src="/amq.png" style={{height:'40px'}}></img>
      {/* <Handle type='source' position={Position.Top}></Handle> */}
      <Handle type='source' position={Position.Right} ></Handle>
    </div>
  );
}
export  function  IBMMQAdapter() {
  
  return (
    <div style={{ padding: '1px', border: '1px solid black', borderRadius: '1px',height:'70px',width:'50px' }}>
      <img src="/ibmmq.png" style={{height:'40px'}}></img>
      {/* <Handle type='source' position={Position.Top}></Handle> */}
      <Handle type='target' position={Position.Bottom} ></Handle>
    </div>
  );
}

export  function  KafkaAdapter() {
  
  return (
    <div style={{ padding: '1px', border: '1px solid black', borderRadius: '1px',height:'70px',width:'50px' }}>
      <img src="/kafka.png" style={{height:'40px'}}></img>
      {/* <Handle type='source' position={Position.Top}></Handle> */}
      <Handle type='target' position={Position.Bottom} ></Handle>
    </div>
  );
}
export function  RestAdapter() {
  
  return (
    <div style={{ padding: '1px', border: '1px solid black', borderRadius: '1px',height:'70px',width:'50px' }}>
      <img src="/REST-image.png" style={{height:'40px'}}></img>
      {/* <Handle type='source' position={Position.Top}></Handle> */}
      <Handle type='target' position={Position.Bottom} ></Handle>
    </div>
  );
}


