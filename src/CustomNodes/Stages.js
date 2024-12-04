import React from 'react';
import { Handle, Position } from 'reactflow';

export function Modify(){
  return (
    <>
      <div className='Hops'>
     <span style={{fontSize:'7px',fontFamily:'sans-serif'}}>Modify</span>
   
     <Handle type='target' position={Position.Left} ></Handle>
      <Handle type='source' position={Position.Right} ></Handle>
    </div>

    </>
  )
}
export function Source(){
  return (
    <>
      <div className='Hops'>
        <span style={{fontSize:'7px',fontFamily:'sans-serif'}}>Source</span>
        <Handle type='target' position={Position.Left} ></Handle>
        <Handle type='source' position={Position.Right} ></Handle>
    </div>

    </>
  )
}
export function Target(){
  return (
    <>
      <div className='Hops'>
     <span style={{fontSize:'7px',fontFamily:'sans-serif'}}>Target</span>
     <Handle type='target' position={Position.Left} ></Handle>
     <Handle type='source' position={Position.Right} ></Handle>
    </div>

    </>
  )
}
export function Selector(){
  return (
    <>
      <div className='Hops'>
     <span style={{fontSize:'7px',fontFamily:'sans-serif'}}>Selector</span>
   
     <Handle type='target' position={Position.Left} ></Handle>
     <Handle type='source' position={Position.Right} ></Handle>
    </div>

    </>
  )
}