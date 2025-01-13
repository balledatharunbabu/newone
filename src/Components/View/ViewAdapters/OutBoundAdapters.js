import { Box, Avatar } from '@mui/material';
import React from 'react';
import { Handle, Position } from 'reactflow';



export function AmqOutAdapter() {

  return (
    <Box
      sx={{
        border: '1px solid #454545',
        borderRadius: 3,
        height: '5vh',
        width: '3vw',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Avatar
        alt="ActiveMQ"
        src="/amq.png"
        style={{ width: '2.2vw', height: '4vh', borderRadius: 2 }}
      />
      <Handle type='source' position={Position.Right} ></Handle>
      <Handle type='target' position={Position.Left} ></Handle>
    </Box>
  );
}

export function IBMMQOutAdapter() {

  return (
    <Box
      sx={{
        border: '1px solid #454545',
        borderRadius: 3,
        height: '5vh',
        width: '3vw',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Avatar
        alt="IbmMQ"
        src="/ibmmq.png"
        style={{ width: '2.2vw', height: '4vh', borderRadius: 2 }}
      />
      <Handle type='source' position={Position.Right} ></Handle>
      <Handle type='target' position={Position.Left} ></Handle>
    </Box>
  );
}

export function KafkaOutAdapter() {

  return (
    <Box
      sx={{
        border: '1px solid #454545',
        borderRadius: 3,
        height: '5vh',
        width: '3vw',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Avatar
        alt="Kafka"
        src="/kafka.png"
        style={{ width: '2.2vw', height: '4vh', borderRadius: 2 }}
      />
      <Handle type='target' position={Position.Left} style={{ background: 'green' }} ></Handle>
      <Handle type='source' position={Position.Right} style={{ background: 'green' }}></Handle>      </Box>
  );
}


export function RestOutAdapter() {

  return (
    <Box
      sx={{
        border: '1px solid #454545',
        borderRadius: 3,
        height: '5vh',
        width: '3vw',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Avatar
        alt="Rest-Api"
        src="/REST-image.png"
        style={{ width: '2.2vw', height: '4vh', borderRadius: 2 }}
      />
      <Handle type='target' position={Position.Left} ></Handle>
      <Handle type='source' position={Position.Right} ></Handle>
    </Box>
  );

}