import React from 'react';
import { Handle, Position } from 'reactflow';
import  '../Style/Configuration/Configuration.css'
export function Modify(){
  return (
    <>
      <div className='Hops' style={{backgroundColor:'#434779'}}>
     <span style={{fontSize:'7px',fontFamily:'sans-serif',color:'white'}}>Convert</span>
   
     <Handle type='target' position={Position.Left} style={{  background: '#434779' }} ></Handle>
      <Handle type='source' position={Position.Right} style={{  background: '#434779' }} ></Handle>
    </div>

    </>
  )
}
export function Source(){
  return (
    <>
      <div className='Hops' style={{backgroundColor:'#434779'}}>
        <span style={{fontSize:'7px',fontFamily:'sans-serif',color:'white'}}>InGate</span>
        <Handle type='target' position={Position.Left} style={{  background: '#434779' }}></Handle>
        <Handle type='source' position={Position.Right} style={{  background: '#434779' }}></Handle>
    </div>

    </>
  )
}
export function Target(){
  return (
    <>
      <div className='Hops' style={{backgroundColor:'#434779'}}>
     <span style={{fontSize:'7px',fontFamily:'sans-serif',color:'white'}}>OutGate</span>
     <Handle type='target' position={Position.Left} style={{  background: '#434779' }}></Handle>
     <Handle type='source' position={Position.Right} style={{  background: '#434779' }}></Handle>
    </div>

    </>
  )
}
export function Selector(){
  return (
    <>
      <div className='Hops' style={{backgroundColor:'#434779'}}>
     <span style={{fontSize:'6px',fontFamily:'sans-serif',color:'white'}}>RouteFlip</span>
   
     <Handle type='target' position={Position.Left} style={{  background: '#434779' }}></Handle>
     <Handle type='source' position={Position.Right} style={{  background: '#434779' }}></Handle>
    </div>

    </>
  )
}