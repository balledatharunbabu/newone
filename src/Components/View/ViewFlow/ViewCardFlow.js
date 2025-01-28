import React, { useState, useEffect, useContext } from 'react';
import { Box, Card, CardContent, IconButton, ListItemText } from '@mui/material';
// import ViewDnDFlow from './ViewFlow/ViewDnDFlow';
import Collapse from '@mui/material/Collapse';
import ViewDnDFlow from './ViewDnDFlow';


export default function ViewCardFlow({ item, index, expandedViewFlowIndex }) {

	const isFlowExpanded = expandedViewFlowIndex === index;

	let listOfMaps = [];

	// let validateOutBoundsTypes = false;
	// let listOfOutBoundTypes = [];
	// item.nodes.forEach((data, index) => {
	// 	// console.log("data index", data.type);
	// 	if (validateOutBoundsTypes === true) {
	// 		listOfOutBoundTypes.push(data.type);
	// 	}
	// 	if (data.type.toLowerCase() === 'outgate') {
	// 		validateOutBoundsTypes = true;
	// 	}
	// })

	let i = 0;
	item.outbound.forEach((group, groupIndex) => {
		// Iterate through each item in the group
		group.forEach((_, itemIndex) => {

			// Access the specific data at the given position
			let specificData = item.outbound[groupIndex][itemIndex];

			// console.log(i++, "specificData ca-- > ", specificData)
			// setOutBoundDataList([...outboundDataList, specificData]);
			listOfMaps.push(specificData);

		});
	})

	// listOfMaps.sort((a, b) => {
	// 	let a1 = null;
	// 	if (a.queue || a.queuename || a.topic) {
	// 		a1 = a.queue || a.queuename || a.topic;
	// 	}
	// 	console.log("  sort a1 : ", a1)
	// 	// return order.indexOf(a.name) - order.indexOf(b.name);
	// });

	{
		// console.log("listOfOutBoundTypes --> ", listOfOutBoundTypes)
		console.log("listOfMaps viewCard --> ", listOfMaps);
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
				backgroundColor: 'rgba(0, 0, 255, 0.1)',
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

					<ViewDnDFlow item={item} listOfMaps={listOfMaps} />

				</CardContent>
			</Collapse>
		</Card>
	);
};