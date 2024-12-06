import React from 'react';
import { Handle, Position } from 'reactflow';
export  function AmqAdapter() {
  
  return (
    <div style={{ padding: '1px', border: '1px solid #454545', borderRadius: '20%',height:'30px',width:'35px' }}>
      <img src="/amq.png" style={{height:'30px'}}></img>
      {/* <Handle type='source' position={Position.Top}></Handle> */}
      <Handle type='source' position={Position.Right}   style={{  background: 'green' }}></Handle>
    </div>
  );
}
export  function  IBMMQAdapter() {
  
  return (
    <div style={{ padding: '1px', border: '1px solid #454545', borderRadius: '20%',height:'30px',width:'35px' }}>
      <img src="/ibmmq.png" style={{height:'30px',marginRight:'2px'}}></img>
      {/* <Handle type='source' position={Position.Top}></Handle> */}
      <Handle type='source' position={Position.Right} style={{  background: '#434779' }} ></Handle>
    </div>
  );
}

export  function  KafkaAdapter() {
  
  return (
    <div style={{ padding: '1px', border: '1px solid black', borderRadius: '20%',height:'30px',width:'35px' }}>
      <img src="/kafka.png" style={{height:'30px',marginLeft:'3px'}}></img>
      {/* <Handle type='source' position={Position.Top}></Handle> */}
      <Handle type='source' position={Position.Right} style={{  background: '#434779' }}></Handle>
    </div>
  );
}
export function  RestAdapter() {
  
  return (
    <div style={{ padding: '1px', border: '1px solid black', borderRadius: '20%',height:'30px',width:'35px' }}>
      <img src="/REST-image.png" style={{height:'30px'}}></img>
      {/* <Handle type='source' position={Position.Top}></Handle> */}
      <Handle type='source' position={Position.Right} style={{  background: '#434779' }}></Handle>
    </div>
  );
}


