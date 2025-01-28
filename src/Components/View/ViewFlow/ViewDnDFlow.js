import React, { useRef, useCallback, useState, useContext, useEffect } from 'react';
import { ReactFlow, ReactFlowProvider, addEdge, useNodesState, useEdgesState, useReactFlow, Background } from 'reactflow';
import 'reactflow/dist/style.css';
import { ViewInRestAdapter, ViewInIBMMQAdapter, ViewInKafkaAdapter, ViewInAmqAdapter } from '../ViewAdapters/InGateAdapter.js';
// import { Modify, Selector, Target, Source } from './Stages.js';
// import { Modify, Selector, Target, Source } from './Stages.js';
import { RestOutAdapter, KafkaOutAdapter, IBMMQOutAdapter, AmqOutAdapter } from '../ViewAdapters/OutBoundAdapters.js';

import ViewInGateAmqConfig from '../Forms/InGate/ViewInGateAmqConfig.js';
import ViewInGateKafkaConfig from '../Forms/InGate/ViewInGateKafkaConfig.js';
import ViewInGateIbmMqConfig from '../Forms/InGate/ViewInGateIbmMqConfig.js';
import ViewInGateRestConfig from '../Forms/InGate/ViewInGateRestConfig.js';

import ViewOutGateAmqConfig from '../Forms/OutGate/ViewOutGateAmqConfig.js';
import ViewOutGateKafkaConfig from '../Forms/OutGate/ViewOutGateKafkaConfig.js';
import ViewOutGateIbmMqConfig from '../Forms/OutGate/ViewOutGateIbmMqConfig.js';
import ViewOutGateRestConfig from '../Forms/OutGate/ViewOutGateRestConfig.js';

import ViewStageConvert from '../Forms/Stages/ViewStageConvert.js';
import ViewRouteFlip from '../Forms/Stages/ViewRouteFlip.js';
import ViewGate from '../Forms/Stages/ViewGate.js';

import { Box } from '@mui/material';
import { Modify, Selector, Target, Source } from './ViewStages.js';
import AnimatedSVGEdge from '../Custom/AnimatedSVGEdge.js';
// import AnimatedSVGEdge from './components/AnimatedSVGEdge';

export default function ViewDnDFlow({ item, listOfMaps, expandedViewFlowIndex }) {

	{
		// console.log(listOfMaps, " item out 004", item);
	}

	const reactFlowWrapper = useRef(null);

	// ingate
	const [Amq, setAmq] = useState(false);
	const [Kafka, setKafka] = useState(false);
	const [Rest, setRest] = useState(false);
	const [Ibm, setIbm] = useState(false);

	// outGate
	const [Amqout, setAmqout] = useState(false);
	const [Kafkaout, setKafkaout] = useState(false);
	const [Restout, setRestout] = useState(false);
	const [Ibmout, setIbmout] = useState(false);

	// stages
	const [Ingate, setInGate] = useState(false);
	const [RouteFlip, setRouteFlip] = useState(false);
	const [Convert, setConvert] = useState(false);
	const [Outgate, setOutGate] = useState(false);

	const [currentOutBound, setCurrentOutBound] = useState(null);


	const nodeTypes = {

		kafka: ViewInKafkaAdapter,
		rest: ViewInRestAdapter,
		ibmMQ: ViewInIBMMQAdapter,
		Amq: ViewInAmqAdapter,
		Convert: Modify,
		RouteFlip: Selector,
		Ingate: Source,
		Outgate: Target,
		restout: RestOutAdapter,
		kafkaout: KafkaOutAdapter,
		ibmMQout: IBMMQOutAdapter,
		Amqout: AmqOutAdapter,
	};




	// let listOfMaps = [];

	{
		// console.log("item  dnd ", item)
	}





	const onNodeClick = useCallback(
		(_, node) => {

			console.log("node type ", node.type)

			//   Extract the part after the underscore and update the current node
			const currentNodeIndex = node.id.split("_")[1];
			console.log(item.outbound.length, "outbound Length<--- currentNodeIndex ", currentNodeIndex)
			console.log("index ---> ", (Number(currentNodeIndex) - (item.nodes.length) - 1))
			if ((Number(currentNodeIndex) - (item.nodes.length) - 1) < 0) {
				console.log("*************************************", node.type)
				console.log((item.nodes.length), " current Index ", Number(currentNodeIndex));
				console.log("length of Maps : ", listOfMaps.length)
				console.log(" current node index : ", Number(currentNodeIndex))
				console.log(" Maps : ", listOfMaps)
				setCurrentOutBound(listOfMaps[listOfMaps.length - (item.nodes.length - Number(currentNodeIndex))]);

			}



			setAmq((prevAmq) => {
				if (node.type === 'Amq') {

					return !prevAmq; // Toggle Amq state
				}
				return false;
			});

			setAmqout((prevAmqout) => {
				if (node.type === 'Amqout') {

					return !prevAmqout; // Toggle Amq state
				}
				return false;
			});



			setKafka((prevKafka) => {
				if (node.type === 'kafka') {
					return !prevKafka;
				}
				return false;
			});
			setKafkaout((prevKafka) => {
				if (node.type === 'kafkaout') {
					return !prevKafka;
				}
				return false;
			});

			setRest((prevRest) => {
				if (node.type === 'rest') {
					return !prevRest;
				}
				return false;
			});

			setRestout((prevRest) => {
				if (node.type === 'restout') {
					return !prevRest;
				}
				return false;
			});

			setIbm((prevIbm) => {
				if (node.type === 'ibmMQ') {
					return !prevIbm;
				}
				return false;
			});
			setIbmout((prevAmq) => {
				if (node.type === 'ibmMQout') {
					return !prevAmq; // Toggle Amq state
				}
				return false;
			});
			setInGate((prevAmq) => {
				if (node.type === 'Ingate') {
					return !prevAmq; // Toggle Amq state
				}
				return false;
			});
			setConvert((prevConvert) => {
				if (node.type === 'Convert') {
					return !prevConvert;
				}
				return false;
			});

			setRouteFlip((prevRouteFlip) => {
				if (node.type === 'RouteFlip') {
					return !prevRouteFlip;
				}
				return false;
			});
			setOutGate((prevAmq) => {
				if (node.type === 'Outgate') {
					return !prevAmq; // Toggle Amq state
				}
				return false;
			});
		},
		[],
	);




	const edgeTypes = {
		straight: (props) =>
			<AnimatedSVGEdge {...props} itemEdges={item.edges} />,
	};

	return (
		<Box sx={{ display: 'flex', width: '100vw', height: '40vh' }}>
			<Box className="reactflow-wrapper" ref={reactFlowWrapper}
				style={{
					height: 'auto', width: '58vw', margin: '2%', overflow: 'hidden',
					display: 'flex',
					// borderRadius: 25,
					marginTop: 2,
					marginLeft: 100,
					marginBottom: 1,
					borderTopLeftRadius: 60,
					borderTopRightRadius: 60,
					borderBottomLeftRadius: 24,
					borderBottomRightRadius: 24,

				}}>

				<ReactFlow
					nodes={item.nodes}
					edges={item.edges}
					nodeTypes={nodeTypes}
					edgeTypes={edgeTypes}
					onNodeClick={onNodeClick}
					// onDragOver={onDragOver}
					fitView
					style={{ backgroundColor: 'rgb(255, 255, 255)' }}
				/>


			</Box>
			<Box sx={{
				width: '42vw',
				// height: '500px',
				display: 'flex',
				flexDirection: 'column',

				paddingRight: 2.5,
				// border: '1px solid #ddd',
				// borderRadius: 2,
				// borderTopRightRadius: 10,
				marginRight: 10,
				marginTop: 5,
				// marginBottom: 5,
				// marginBottom: 1,
				borderTopLeftRadius: 60,
				borderTopRightRadius: 60,
				borderBottomLeftRadius: 24,
				borderBottomRightRadius: 24,

			}}>
				{/* inGate */}
				{Amq && (<ViewInGateAmqConfig ingate={item.inbound} />)}
				{Kafka && <ViewInGateKafkaConfig kafkaInGate={item.inbound} />}
				{Ibm && (<ViewInGateIbmMqConfig imbIngate={item.inbound} />)}
				{Rest && <ViewInGateRestConfig restInGate={item.inbound} />}

				{
					Amqout
					&&
					<ViewOutGateAmqConfig
						outgate={currentOutBound}
					/>
				}

				{
					console.log(item.transdata," kafak out :", item)
				}
				{/* {Amqout && (<ViewOutGateAmqConfig outgate={item.outbound} />)} */}
				{Kafkaout && <ViewOutGateKafkaConfig kafkaOutGate={currentOutBound} />}
				{Ibmout && (<ViewOutGateIbmMqConfig imbOutGate={currentOutBound} />)}
				{Restout && <ViewOutGateRestConfig restOutGate={currentOutBound} />}

				{/* {Ingate && <div><IngateConfig></IngateConfig></div>} */}
				
				{ Ingate && (<ViewGate />)	}
				{/* convert */}
				{Convert && (<ViewStageConvert transData={item.transdata}/>)}
				{	RouteFlip && (<ViewRouteFlip/>)}
				{Outgate && (<ViewGate  />)	}
			</Box>
		</Box>
	);

}


