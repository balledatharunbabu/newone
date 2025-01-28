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

const ViewOutGateIbmMqConfig = ({ imbOutGate }) => {
	const [showProperties, setShowProperties] = useState(false);

	{
		console.log("imbOutGate --> ", imbOutGate)
	}
	const ibmMQOutConfig = {
		queueManager: `${imbOutGate.queuemanger}`,
		queueName: `${imbOutGate.queuename}`,
		Channel: imbOutGate.channel,
		connectionName: imbOutGate.connectionName,
		username: imbOutGate.username
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
				IbmMQ Configuration
			</Typography>

			<Table>
				<TableBody>
					<TableRow>
						<TableCell>Queue Manager:</TableCell>
						<TableCell>
							<TextField
								value={ibmMQOutConfig.queueManager}
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
								value={ibmMQOutConfig.queueName}
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
								<TableCell>Channel</TableCell>
								<TableCell>
									<TextField
										value={ibmMQOutConfig.Channel}
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
								<TableCell>Connection Name:</TableCell>
								<TableCell>
									<TextField
										value={ibmMQOutConfig.connectionName}
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
										value={ibmMQOutConfig.username}
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

export default ViewOutGateIbmMqConfig;
