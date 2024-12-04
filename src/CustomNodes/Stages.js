import React from 'react';
import { Handle, Position } from 'reactflow';

export function Modify(){
  return (
    <>
      <div style={{ padding: '1px', border: '1px solid black', borderRadius: '1px',height:'20px',width:'50px' }}>
     <span>Modify</span>
   
      <Handle type="source" position={Position.Bottom} />
      <Handle type="target" position={Position.Top} />
    </div>

    </>
  )
}
export function Source(){
  return (
    <>
      <div style={{ padding: '1px', border: '1px solid black', borderRadius: '1px',height:'20px',width:'50px' }}>
     <span>Source</span>
   
      <Handle type="source" position={Position.Bottom} />
      <Handle type="target" position={Position.Top} />
    </div>

    </>
  )
}
export function Target(){
  return (
    <>
      <div style={{ padding: '1px', border: '1px solid black', borderRadius: '1px',height:'20px',width:'50px' }}>
     <span>Target</span>
   
      <Handle type="source" position={Position.Bottom} />
      <Handle type="target" position={Position.Top} />
    </div>

    </>
  )
}
export function Selector(){
  return (
    <>
      <div style={{ padding: '1px', border: '1px solid black', borderRadius: '1px',height:'20px',width:'50px' }}>
     <span>Selector</span>
   
      <Handle type="source" position={Position.Bottom} />
      <Handle type="target" position={Position.Top} />
    </div>

    </>
  )
}