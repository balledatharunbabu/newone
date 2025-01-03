import React from 'react';
import { IconButton, ListItemText } from '@mui/material';

export default function CustomIconButton({ onClick, label, icon, sx }) {
	return (
		<IconButton
			sx={{
				width: '100px',
				height: '10%',
				backgroundColor: "#38409C",
				borderRadius: '24%',
				color: 'white',
				'&:hover': {
					boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.2)',
					backgroundColor: 'green',
					borderTopRightRadius: '50px',
				},
				...sx,
			}}
			onClick={onClick}
		>
			<ListItemText primary={label} sx={{ textAlign: 'center' }} />
			{icon}
		</IconButton>
	);
};


