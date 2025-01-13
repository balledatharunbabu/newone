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

const ViewInGateRestConfig = ({ restInGate }) => {
	const [showProperties, setShowProperties] = useState(false);

	const restInConfig = {

		brokerUrl: restInGate.url

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
				Rest Configuration
			</Typography>

			<Table>
				<TableBody>
					<TableRow>
						<TableCell>Url :</TableCell>
						<TableCell>
							<TextField
								value={restInConfig.brokerUrl}
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
	);
};

export default ViewInGateRestConfig;
