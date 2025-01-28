import React from 'react';
import { Handle, Position } from 'reactflow';
// import '../src/Style/Configuration/Configuration.css'
import { Typography, Box } from '@mui/material';


export function Modify() {
	return (
		<Box
			sx={{
				fontFamily: 'sans-serif',
				color: 'white',
				borderRadius: 2,
				height: '2vh',
				width: '3vw',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				backgroundColor: '#434779',
				boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',
				transition: 'transform 0.2s, box-shadow 0.2s',
				cursor: 'pointer',
				"&:hover": {
					transform: 'scale(1.05)',
					boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.35)',
				},
			}}
		>
			<Typography
				sx={{
					fontSize: '7px', fontFamily: 'sans-serif', color: 'white'
				}}
			>
				Convert
			</Typography>
			{/* <Avatar
				alt="ActiveMQ"
				src="/amq.png"
				style={{ width: '2.2vw', height: '4vh', borderRadius: 2 }}
			/> */}
			<Handle type='target' position={Position.Left} style={{ background: '#434779' }} ></Handle>
			<Handle type='source' position={Position.Right} style={{ background: '#434779' }} ></Handle>
		</Box>
	)
}


export function Source() {
	return (
		<Box
			// sx={{
			// 	fontFamily: 'sans-serif', color: 'white',
			// 	border: '1px solid #454545',
			// 	borderRadius: 2,
			// 	height: '5vh',
			// 	width: '3vw',
			// 	display: 'flex',
			// 	flexDirection: 'column',
			// 	alignItems: 'center',
			// 	justifyContent: 'center',
			// 	backgroundColor: '#434779'
			// }}
			sx={{
				fontFamily: 'sans-serif',
				color: 'white',
				borderRadius: 2,
				height: '2vh',
				width: '3vw',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				backgroundColor: '#434779',
				boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',
				transition: 'transform 0.2s, box-shadow 0.2s',
				cursor: 'pointer',
				"&:hover": {
					transform: 'scale(1.05)',
					boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.35)',
				},
			}}
		>
			<Typography
				// sx={{
				// 	fontSize: '10px', fontFamily: 'sans-serif', color: 'white'
				// }}
				sx={{
					fontSize: 10,
					fontWeight: 'bold',
					color: '#ffffff',
					textAlign: 'center',
				}}
			>
				InGate
			</Typography>
			{/* <Avatar
				alt="ActiveMQ"
				src="/amq.png"
				style={{ width: '2.2vw', height: '4vh', borderRadius: 2 }}
			/> */}
			<Handle type='target' position={Position.Left} style={{ background: '#434779' }}></Handle>
			<Handle type='source' position={Position.Right} style={{ background: '#434779' }}></Handle>
		</Box>
	)
	// <>
	// 	<div className='Hops' style={{ backgroundColor: '#434779' }}>
	// 		<span style={{ fontSize: '7px', fontFamily: 'sans-serif', color: 'white' }}>InGate</span>
	// 		<Handle type='target' position={Position.Left} style={{ background: '#434779' }}></Handle>
	// 		<Handle type='source' position={Position.Right} style={{ background: '#434779' }}></Handle>
	// 	</div>

	// </>

}
export function Target() {
	return (
		<Box

			sx={{
				fontFamily: 'sans-serif',
				color: 'white',
				borderRadius: 2,
				height: '2vh',
				width: '3vw',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				backgroundColor: '#434779',
				boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',
				transition: 'transform 0.2s, box-shadow 0.2s',
				cursor: 'pointer',
				"&:hover": {
					transform: 'scale(1.05)',
					boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.35)',
				},
			}}
		>
			<Typography
				sx={{
					fontSize: 10,
					fontWeight: 'bold',
					color: '#ffffff',
					textAlign: 'center',
				}}
			>
				OutGate
			</Typography>
			{/* <Avatar
				alt="ActiveMQ"
				src="/amq.png"
				style={{ width: '2.2vw', height: '4vh', borderRadius: 2 }}
			/> */}
			<Handle type='target' position={Position.Left} style={{ background: '#434779' }}></Handle>
			<Handle type='source' position={Position.Right} style={{ background: '#434779' }}></Handle>
		</Box>


		// <>
		// 	<div className='Hops' style={{ backgroundColor: '#434779' }}>
		// 		<span style={{ fontSize: '7px', fontFamily: 'sans-serif', color: 'white' }}>OutGate</span>

		// 	</div>

		// </>
	)
}
export function Selector() {
	return (
		<Box
			sx={{
				fontFamily: 'sans-serif',
				color: 'white',
				borderRadius: 2,
				height: '2vh',
				width: '3vw',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				backgroundColor: '#434779',
				boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',
				transition: 'transform 0.2s, box-shadow 0.2s',
				cursor: 'pointer',
				"&:hover": {
					transform: 'scale(1.05)',
					boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.35)',
				},
			}}
		>
			<Typography
				sx={{
					fontSize: 7,
					// fontWeight: 'bold',
					color: '#ffffff',
					textAlign: 'center',
					
				}}
			>
				RouteFlip
			</Typography>
			{/* <Avatar
			alt="ActiveMQ"
			src="/amq.png"
			style={{ width: '2.2vw', height: '4vh', borderRadius: 2 }}
		/> */}
			<Handle type='target' position={Position.Left} style={{ background: '#434779' }}></Handle>
			<Handle type='source' position={Position.Right} style={{ background: '#434779' }}></Handle>
		</Box>

	)
}