import React, { Profiler } from 'react';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import {
	ListItemButton,
	ListItemIcon,
	Collapse,
	Card, CardContent
} from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import PersonIcon from '@mui/icons-material/Person';

import { useDnD } from "../Components/DnDContext";
export default function InEndPointCard({ updateInExpandedEndPoint, inexpandedEndPoint }) {
	const [_, setType] = useDnD();
	const onDragStart = (event, nodeType) => {
		setType(nodeType);
	
		console.log(nodeType);
		event.dataTransfer.effectAllowed = 'move';
	  };

	const handleClickEndPoints = () => {
		updateInExpandedEndPoint(!inexpandedEndPoint);
	}

	return (
		<Card
		sx={{
			// // boxShadow: '8px 8px 1000px rgba(0, 0, 0, 0.5)',
			boxShadow: '8px 8px 1px rgba(0, 0, 0, 0.3)', // Initial shadow
			transition: 'all 0.3s ease', // Smooth transition for hover effect
			'&:hover': {
			backgroundColor: 'rgba(0, 0, 255, 0.2)', // Background color on hover
			borderTopRightRadius: '50px',
			 // Transition to oval shape on hover
			// boxShadow: '0px -8px 20px rgba(0, 0, 0, 0.2)'
			},
			}}
		>
			<CardContent
				sx={{
					maxWidth: "230px",
					padding: "0px",
					boxShadow: '8px 8px 9px rgba(0, 0, 0, 0.1 )',
					
				}}
			>
				<ListItemButton onClick={handleClickEndPoints}
					// disablePadding
					sx={{
						boxShadow: "inherit",
						'&:hover': {
							backgroundColor: '#434779',
							color: "white",
						},

					}}
				>
					<ListItemIcon>
						< Profiler />
					</ListItemIcon>
					<ListItemText primary="End Points" />
					{inexpandedEndPoint ? <ExpandLess /> : <ExpandMore />}
				</ListItemButton>
				<Collapse in={inexpandedEndPoint} timeout="auto" unmountOnExit
					sx={{ boxShadow: "initial" }}
				>
					<List component="div" disablePadding>
						<ListItemButton sx={{
							pl: 4,
							'&:hover': {
								backgroundColor: '#434779', // Background color on hover
								borderTopRightRadius: '24px', // Transition to oval shape on hover
								boxShadow: '8px 8px 100px rgba(0, 0, 0, 0.1)', // Enhanced shadow on hover
								color: "white"
							},
						}} onDragStart={(event) => onDragStart(event, 'Amq')} draggable
						>
							<ListItemIcon>
								
							</ListItemIcon>
							<ListItemText primary="ActiveMQ" />
						</ListItemButton>
						<ListItemButton sx={{
							pl: 4,
							'&:hover': {
								backgroundColor: '#434779', // Background color on hover
								borderTopRightRadius: '24px', // Transition to oval shape on hover
								boxShadow: '8px 8px 100px rgba(0, 0, 0, 0.1)', // Enhanced shadow on hover
								color: "white"
							},
						}}>
							<ListItemIcon>
								<PersonIcon />
							</ListItemIcon>
							<ListItemText primary="Kafka" />
						</ListItemButton>
						<ListItemButton sx={{
							pl: 4,
							'&:hover': {
								backgroundColor: '#434779', // Background color on hover
								borderTopRightRadius: '24px', // Transition to oval shape on hover
								boxShadow: '8px 8px 100px rgba(0, 0, 0, 0.1)', // Enhanced shadow on hover
								color: "white"
							},
						}}>
							<ListItemIcon>
								<PersonIcon />
							</ListItemIcon>
							<ListItemText primary="IBMMQ" />
						</ListItemButton>
						<ListItemButton sx={{
							pl: 4,
							'&:hover': {
								backgroundColor: '#434779', // Background color on hover
								borderTopRightRadius: '24px', // Transition to oval shape on hover
								boxShadow: '8px 8px 100px rgba(0, 0, 0, 0.1)', // Enhanced shadow on hover
								color: "white"
							},
						}}>
							<ListItemIcon>
								<PersonIcon />
							</ListItemIcon>
							<ListItemText primary="REST API" />
						</ListItemButton>
					</List>
				</Collapse>
			</CardContent>
		</Card>
	);
}