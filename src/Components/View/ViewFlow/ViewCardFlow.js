import React, { useState, useEffect, useContext } from 'react';
import { Box, Card, CardContent, IconButton, ListItemText } from '@mui/material';
// import ViewDnDFlow from './ViewFlow/ViewDnDFlow';
import Collapse from '@mui/material/Collapse';
import ViewDnDFlow from './ViewDnDFlow';


export default function ViewCardFlow({ item, index, expandedViewFlowIndex }) {

	const isFlowExpanded = expandedViewFlowIndex === index;
{
	console.log("item 003-> ", item);
}
	return (
		<Card
			sx={{
				minWidth: '30vw',
				width: '90vw',
				marginY: 1, // Add horizontal margin (left and right)
				marginX: 6, // Add horizontal margin (left and right)
				marginBottom: 8,
				paddingLeft: 5,
				paddingRight: 5,
				boxShadow: 3,
				borderTopLeftRadius: 60,
				borderTopRightRadius: 60,
				borderBottomLeftRadius: 24,
				borderBottomRightRadius: 24,
				// backgroundColor: 'rgba(0, 0, 255, 0.1)',
				// backgroundColor: '#4A5A6A',
				transition: 'transform 0.2s',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				'&:hover': {
					transform: 'scale(1.01)',
				},
			}}
		>

			<Collapse in={isFlowExpanded} timeout="auto" unmountOnExit >
				<CardContent>

					<ViewDnDFlow item={item} />

				</CardContent>
			</Collapse>
		</Card>
	);
};