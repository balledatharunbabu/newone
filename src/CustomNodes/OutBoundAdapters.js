import React from 'react';
import { Handle, Position } from 'reactflow';
export  function AmqOutAdapter() {
  
  return (
    <div style={{ padding: '1px', border: '1px solid #454545', borderRadius: '20%',height:'40px',width:'40px' }}>
      <img src="/amq.png" style={{height:'30px'}}></img>
      {/* <Handle type='source' position={Position.Top}></Handle> */}
      <Handle type='source' position={Position.Right} ></Handle>
      <Handle type='target' position={Position.Left} ></Handle>
    </div>
  );
}
export  function  IBMMQOutAdapter() {
  
  return (
    <div style={{ padding: '1px', border: '1px solid #454545', borderRadius: '20%',height:'40px',width:'40px' }}>
      <img src="/ibmmq.png" style={{height:'30px',marginRight:'2px'}}></img>
      {/* <Handle type='source' position={Position.Top}></Handle> */}
      <Handle type='source' position={Position.Right} ></Handle>
      <Handle type='target' position={Position.Left} ></Handle>
    </div>
  );
}

export  function  KafkaOutAdapter() {
  
  return (
    <div style={{ padding: '1px', border: '1px solid black', borderRadius: '20%',height:'40px',width:'40px' }}>
      <img src="/kafka.png" style={{height:'30px',marginLeft:'3px'}}></img>
      <Handle type='target' position={Position.Left}  style={{  background: '#434779' }} ></Handle>
      <Handle type='source' position={Position.Right}  style={{  background: '#434779' }}></Handle>
    </div>
  );
}
export function  RestOutAdapter() {
  
  return (
    <div style={{ padding: '1px', border: '1px solid black', borderRadius: '20%',height:'40px',width:'40px' }}>
      <img src="/REST-image.png" style={{height:'30px'}}></img>
      <Handle type='target' position={Position.Left} ></Handle>
      <Handle type='source' position={Position.Right} ></Handle>
    </div>
  );
}


