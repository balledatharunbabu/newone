import React, { useState } from 'react';
import {
	Box,
	Typography,
	Table,
	TableBody,
	TableRow,
	TableCell,
	Button,
	TextField
} from '@mui/material';

const ViewOutGateAmqConfig = ({ index, outgate, isActive}) => {
	const [showProperties, setShowProperties] = useState(false);
	const [outgateDetails, setoutgateDetails] = useState([]);

	{
		console.log("outgate item rupa", index );
	}
	// setoutgateDetails(outgate);
	const amqConfigOut = {
		topicName: `${outgate.topic}`,
		queueName: `${outgate.queue}`,
		brokerUrl: outgate[0].brokerurl,
		username: outgate.username
		// password: ingate.password
	};

	const toggleProperties = () => {
		setShowProperties(!showProperties);
	};

	return (
		<Box
			sx={{
				overflowY: 'auto',
				overflowX: 'hidden',
				maxHeight: '30vh',
				border: '1px solid #ccc',
				borderRadius: '8px',
				padding: 2
			}}
		>
			<Typography
				variant="h6"
				sx={{
					backgroundColor: 'rgb(88, 90, 148)',
					color: '#fff',
					textAlign: 'center',
					padding: 1,
					borderRadius: '4px'
				}}
			>
				JMS Configuration
			</Typography>

			<Table>
				<TableBody>
					<TableRow>
						<TableCell>Topic Name:</TableCell>
						<TableCell>
							<TextField
								value={amqConfigOut.topicName}
								variant="outlined"
								size="small"
								fullWidth
								InputProps={{
									readOnly: true
								}}
							/>
						</TableCell>
					</TableRow>
					<TableRow>
						<TableCell>Queue Name:</TableCell>
						<TableCell>
							<TextField
								value={amqConfigOut.queueName}
								variant="outlined"
								size="small"
								fullWidth
								InputProps={{
									readOnly: true
								}}
							/>
						</TableCell>
					</TableRow>
				</TableBody>
			</Table>

			<Button
				variant="contained"
				onClick={toggleProperties}
				sx={{
					backgroundColor: 'rgb(88, 90, 148)',
					color: '#fff',
					marginTop: 2,
					width: '100%'
				}}
			>
				Properties
			</Button>

			{showProperties && (
				<Box sx={{ marginTop: 2 }}>
					<Table>
						<TableBody>
							<TableRow>
								<TableCell>Broker URL:</TableCell>
								<TableCell>
									<TextField
										value={amqConfigOut.brokerUrl}
										variant="outlined"
										size="small"
										fullWidth
										InputProps={{
											readOnly: true
										}}
									/>
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCell>Username:</TableCell>
								<TableCell>
									<TextField
										value={amqConfigOut.username}
										variant="outlined"
										size="small"
										fullWidth
										InputProps={{
											readOnly: true
										}}
									/>
								</TableCell>
							</TableRow>
						</TableBody>
					</Table>
				</Box>
			)}
		</Box>
	);
};

export default ViewOutGateAmqConfig;
