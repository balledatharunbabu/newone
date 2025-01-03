import React from 'react';
import { FormControl, InputLabel, OutlinedInput } from '@mui/material';

export default function CustomInput({
	id,
	label,
	value,
	onChange,
	sx = {}, // Allow custom styles to be passed via props
	...props
}) {
	return (
		<FormControl sx={{ marginLeft: '10px', marginRight: '150px', ...sx }}>
			<InputLabel
				htmlFor={id}
				sx={{
					fontSize: '16px',
					paddingTop: '0px',
					paddingBottom: '0px',

					color: '#444',
					// backgroundColor: '#ffffff'
				}}
			>
				{label}
			</InputLabel>

			<OutlinedInput
				id={id}
				value={value}
				onChange={onChange}
				label={label}
				sx={{
					fontSize: '20px',
					height: '50px',
					paddingTop: '3px',
					paddingBottom: '6px',
					borderRadius: '12px',
					backgroundColor: '#f5f5f5',
					'& fieldset': {
						borderColor: '#ccc',
						borderWidth: '2px',
					},
					'&:hover fieldset': {
						borderColor: '#1976d2',
					},
					'&.Mui-focused fieldset': {
						borderColor: '#3f51b5',
						borderWidth: '2px',
					},
					boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
					transition: 'all 0.3s ease',
					'& input': {
						paddingLeft: '14px',

					},
					...sx, // Allow custom styles to be passed via props
				}}
				{...props}
			/>
		</FormControl>
	);
};


