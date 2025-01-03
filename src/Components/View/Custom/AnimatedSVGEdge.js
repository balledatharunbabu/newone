import React from 'react';
import ReactFlow, { BaseEdge, getSmoothStepPath } from 'reactflow';
import 'reactflow/dist/style.css';

// Custom Edge Component
export default function AnimatedSVGEdge({
	id,
	sourceX,
	sourceY,
	targetX,
	targetY,
	sourcePosition,
	targetPosition,
	type
}) {
	// // Generate the edge path
	// const [edgePath] = getSmoothStepPath({
	// 	sourceX,
	// 	sourceY,
	// 	sourcePosition,
	// 	targetX,
	// 	targetY,
	// 	targetPosition,
	// 	type
	// });

	const isStraight = type === 'straight1';


	let edgePath = '';
	if (isStraight) {
		edgePath = `M${sourceX},${sourceY} L${targetX},${targetY}`;
	} else {
		[edgePath] = getSmoothStepPath({
			sourceX,
			sourceY,
			sourcePosition,
			targetX,
			targetY,
			targetPosition,
		});
	}
	
	return (
		<g>
			{/* Render the path */}
			<path id={id} d={`M${sourceX},${sourceY} L${targetX},${targetY}`} stroke="black" fill="none" />
			{/* Render the animated circle */}
			<circle r="3" fill="#808080">
				<animateMotion dur="4s" repeatCount="indefinite">
					<mpath xlinkHref={`#${id}`} />
				</animateMotion>
			</circle>
		</g>
	);
}
