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

const ViewInGateAmqConfig = ({ kafkaInGate }) => {
	const [showProperties, setShowProperties] = useState(false);

	const kafkaInConfig = {
		topicName: `${kafkaInGate.topic}`,
		brokerUrl: kafkaInGate.brokerurl,
		username: kafkaInGate.username || null
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
				Kafka Configuration
			</Typography>

			<Table>
				<TableBody>
					<TableRow>
						<TableCell>Topic Name:</TableCell>
						<TableCell>
							<TextField
								value={kafkaInConfig.topicName}
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
										value={kafkaInConfig.brokerUrl}
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
										value={kafkaInConfig.username}
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

export default ViewInGateAmqConfig;
