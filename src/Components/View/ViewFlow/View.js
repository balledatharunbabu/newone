import { Box, Button, Card, CardContent, IconButton, ListItemText, Paper } from '@mui/material';
import React, { useState, useEffect, useCallback, useContext } from 'react';
import TextField from '@mui/material/TextField';
import { AlignHorizontalCenter, AlignHorizontalCenterOutlined, ElevatorOutlined, ForkLeft, FormatAlignJustify, Height, HeightOutlined, Margin, Padding } from '@mui/icons-material';
import {
	FormControl, OutlinedInput, InputLabel, useMediaQuery, InputAdornment, Grid2,
	CardHeader, Typography
} from '@mui/material';
// import { Center } from '@chakra-ui/react';
import CustomInput from '../Custom/CustomInput';
import SearchIcon from '@mui/icons-material/Search';
import { red } from '@mui/material/colors';
import axios from 'axios';
import Grid from '@mui/material/Grid';
import CustomIconButton from '../Custom/CustomIconButton';
import CardActions from '@mui/material/CardActions';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import { styled, useTheme } from '@mui/material/styles';
// import ViewDnDFlow from '../temp/ViewDnDFlow';
// import { context } from '../../App';
// import { ViewCardFlow } from '../View/ViewFlow/ViewCardFlow';
import ViewCardFlow from './ViewCardFlow'
import HeaderTwo from '../../headerTwo';
import { useForm, Controller, Form } from 'react-hook-form';
// import { useMediaQuery } from '@mui/material';

export default function View({ }) {

	// const isMobile = useMediaQuery('(max-width:600px)');

	// const [id, setId] = useState("");
	// const [name, setName] = useState("");
	const [items, setItems] = React.useState([]);
	const [validateSearchItem, setValidateSearchItem] = useState(false)
	// const { items, setItems } = useContext(context);
	const [searchFields, setSearchFields] = useState({
		id: "",
		name: "",
		region: ""
	});

	const { control, handleSubmit, formState: { errors } } = useForm();

	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Check if screen size is 'small' or below
	const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md')); // Check if screen size is between 'small' and 'medium'
	const isDesktop = useMediaQuery(theme.breakpoints.up('md')); // Check if screen size is 'medium' or above

	// const [errors, setErrors] = useState({
	// 	id: '',
	// 	name: '',
	// 	region: '',
	// });
	// const handleOnChange = (event) => {
	// 	const { name, value } = event.target; // Use 'name' instead of 'key'
	// 	setSearchFields({
	// 		...searchFields,
	// 		[name]: value, // Dynamically set the key based on the input field's name
	// 	});
	// };

	// Memoize the onChange handler using useCallback to prevent unnecessary re-renders
	const handleOnChange = useCallback((event) => {
		const { name, value } = event.target;
		setSearchFields(prevState => ({
			...prevState,
			[name]: value, // Update only the specific field that changed
		}));
		// validateField(name, value);
		// validateField(name, value);
		// validateField(name, value)
	}, []); // Empty dependency array ensures the handler doesn't get recreated




	// Handle form submission
	const onSubmit1 = (data) => {
		console.log(data); // 'data' contains all form field values
		alert(JSON.stringify(data));
	};

	const handleSearch = async (searchFields) => {
		console.log('Form submitted0020:', searchFields.name);
		// searchFields.preventDefault();
		// setSearchFields(searchFields);
		// setValidateSearchItem(false); // Reset the items list before the search


		// No errors; proceed with form submission
		// console.log('Form submitted:', event.id);
		try {
			console.log("search fields ", searchFields.id, searchFields.name, searchFields.region)
			const search = `http://172.17.2.77:9090/search?flowId=${searchFields.id}&flowName=${searchFields.name}&region=${searchFields.region}`;
			const response = await axios.get(search);
			// Log the response data
			console.log("test 001", response.data);
			if (typeof response.data === "object") {
				const searchItem = response.data;
				setItems([searchItem]);
				console.log("test 0001 ", searchItem)
				setValidateSearchItem(true)
			} else {
				console.log("empty")
				// validateField(searchFields.id, searchFields.name, searchFields.region)

				// setErrors("Invalid Input/Empty Fields")
			}
		} catch (error) {
			console.error("Error fetching flow data:", error);
		}


	};

	const handleSearchAll = async (event) => {
		event.preventDefault();
		const viewAll = `http://172.17.2.77:9090/showAll`;
		axios.get(viewAll)
			.then(response => {
				// setItems(response.data);
				console.log("Response object:", response.data);
				// const index = 0;
				if (Array.length > 0) {
					if (Array.isArray(response.data)) {
						console.log("Response Data:", response.data);
						// Update state with the mapped array
						const updatedItems = response.data.map((item) => ({
							flowId: item.flowId,
							flowName: item.flowName,
							region: item.region,
							stages: item.stages,
							inbound: item.inbound,
							outbound: item.outbound,
							nodes: item.nodes,
							edges: item.edges,
							// index: index
						}));
						// index++;
						console.log("Mapped Items:", JSON.stringify(updatedItems, null, 2));
						// Update state
						setItems(updatedItems);
						setValidateSearchItem(true);
					} else {
						console.error("Response data has single item:", response.data);
					}
				} else {
					console.log('empty ')
				}
			})
			.catch(error => console.error('Error fetching data:', error));
	};

	const validateField = (name, value) => {
		let error = '';

		if (name === 'id') {
			if (!value || value.trim() === '') {
				error = 'ID is required';
			} else if (!/^[a-zA-Z0-9]+$/.test(value)) {
				error = 'ID must be alphanumeric';
			}
		}

		if (name === 'name' && (!value || value.trim() === '')) {
			error = 'Name is required';
		}

		if (name === 'region' && (!value || value.trim() === '')) {
			error = 'Region is required';
		}

		// Update the error state for the specific field
		// setErrors((prevState) => ({
		// 	...prevState,
		// 	[name]: error,
		// }));
	};





	// // To log items outside the function as JSON
	// useEffect(() => {
	// 	console.log("Updated Items State as JSON:", items);
	// }, [items]);

	const [expandedViewFlowIndex, setExpandedViewFlowIndex] = React.useState(null);

	const handleViewCardFlowExpand = (index) => {
		setExpandedViewFlowIndex((prevIndex) => (prevIndex === index ? null : index));
	};

	const onSubmit = (data) => {
		console.log("jiiasd ", data);
	};

	return (
		<Paper sx={{
			// background: "linear-gradient(135deg, #2F284F, #374854)",
			overflow: "hidden",
			minHeight: "100vh", // Covers full viewport height
			minWidth: "99vw", // Covers full viewport width
			paddingBottom: 8,
		}}>
			<HeaderTwo />
			<Card component="form"
				onSubmit={handleSubmit(handleSearch)} //onSubmit
				sx={{
					//** 
					// background: "linear-gradient(135deg,rgb(63, 51, 116), #374854)",
					// background: "linear-gradient(135deg,rgb(53, 36, 63),rgb(53, 87, 107))",
					// background: "linear-gradient(135deg,rgb(80, 44, 65),rgb(53, 87, 107))",
					// background: "linear-gradient(135deg,rgb(69, 118, 141),rgb(47, 77, 112))",
					// background: "#434779",


					// background: 'rgb(88, 90, 148)',


					position: "relative",
					overflow: "hidden",
					color: "#FFFFFF", // Text color **
					// xs: 50,
					// sm: 30,
					// minWidth: isMobile ? window.width - '500px' : window.width - '60%',
					width: isMobile ? '70%' : isTablet ? '50%' : '93%', // Button width adapts
					marginBottom: 5,
					marginTop: 16,
					marginLeft: isMobile ? '16%' : isTablet ? '75%' : '5%', // Button width adapts,
					marginRight: 5,
					paddingTop: 4,
					paddingLeft: 5,
					paddingRight: 50,
					padding: 2,
					height: 'auto',
					boxShadow: '-moz-initial',
					backgroundColor: 'rgba(0, 0, 255, 0.2)', // Background color on hover
					boxShadow: '8px 8px 1px rgba(0, 0, 0, 0.3)', // Initial shadow
					transition: 'all 0.9s ease', // Smooth transition for hover effect
					'&:hover': {
						backgroundColor: 'rgba(0, 0, 255, 0.2)', // Background color on hover
						borderTopRightRadius: '50px'// Transition to oval shape on hover
					}
				}}
				noValidate
				autoComplete="off">

				<CardContent xs={24} sm={6}>

					<Controller
						name="id"
						control={control}
						defaultValue=""
						rules={{
							required: 'ID is required',
							pattern: {
								value: /^[A-Z0-9]+$/,
								message: 'ID must only contain UpperCase & Numbers ',
							},
						}}
						render={({ field, fieldState: { error } }) => (
							<CustomInput
								id="Id"
								label="ID"
								value={field.value}
								onChange={field.onChange}
								error={!!error} // Show error state if validation fails
								helperText={error?.message} // Display the validation message
								sx={{ marginBottom: '2px' }}
							/>
						)}
					/>

					<Controller
						name="name"
						control={control}
						defaultValue=""
						rules={{
							required: 'Name is required',
							pattern: {
								value: /^[A-Z0-9_]+$/,
								message: 'Name must only contain upperCase letters and numbers ',
							},
						}}
						render={({ field, fieldState: { error } }) => (
							<CustomInput
								id="Name"
								label="Name"
								value={field.value}
								onChange={field.onChange}
								error={!!error} // Show error state if validation fails
								helperText={error?.message} // Display the validation message
								sx={{
									marginBottom: '2px',
									// width: {
									// 	xs: '30%', // Mobile (extra small screens)
									// 	// sm: '7%', // Tablet (small screens)
									// 	md: '40%', // Desktop (medium and larger screens)
									// }
								}}
							/>
						)}
					/>

					<Controller
						name="region"
						control={control}
						defaultValue=""
						rules={{
							required: 'region is required',
							pattern: {
								value: /^[A-Z]+$/,
								message: 'Region must only contain upperCase letters ',
							},
						}}
						render={({ field, fieldState: { error } }) => (
							<CustomInput
								id="region"
								label="region"
								name="region"

								value={field.value}
								onChange={field.onChange}
								error={!!error} // Show error state if validation fails
								helperText={error?.message} // Display the validation message
								sx={{
									marginBottom: '2px',
									// width: {
									// 	isMobile ? '10%' 
									// 	// xs: '95%', // Mobile (extra small screens)
									// 	// // sm: '7%', // Tablet (small screens)
									// 	// md: '40%', // Desktop (medium and larger screens)
									// }
								}}
							/>
						)}
					/>
					{/* 				
					<CustomInput
						id="region"
						label="region"
						name="region"
						value={searchFields.region}
						onChange={handleOnChange}
						sx={{ marginBottom: '20px', FormatAlignJustify: 'center' }} />
 					*/}

					{/* search  */}
					<CustomIconButton
						type="submit"
						// onClick={handleSearch}
						label="Search"
						icon={<SearchIcon />}
						sx={{
							// width: isMobile ? '100%' : isTablet ? '75%' : '50%', // Button width adapts
							width: '120px',
							marginTop: isMobile ? '5%' : isTablet ? '75%' : '0%',
							marginLeft: 3, backgroundColor: '#123456'
						}} // Optional custom styles
					/>

					<CustomIconButton
						onClick={handleSearchAll}
						label="viewAll"
						// icon={<SearchIcon />}
						sx={{
							width: '120px',
							// marginLeft: 70,
							marginTop: 2,
							marginLeft: isMobile ? '10%' : isTablet ? '75%' : '40%',
							backgroundColor: '#123456'
						}} // Optional custom styles
					/>
				</CardContent>
			</Card>
			<Grid container spacing={0} >
				{
					console.log("items --> ", items)
				}
				{(validateSearchItem === true && Array.isArray(items) > 0) ? (
					items.map((item, index) => (

						<Grid item xs={24} key={index} sx={{ marginTop: '2%', marginBottom: '-5%' }}>
							<CardHeader
								title={item.flowId + "." + item.flowName + "." + item.region}
								sx={{

									// background: "linear-gradient(135deg, #3C3F58, #475062)", // Slightly lighter gradient
									background: "#434779",
									color: "#FFFFFF", // White text for readability
									boxShadow: "0px 8px 8px rgba(0, 0, 255, 0.45)",
									borderRadius: "12px", // Rounded corners
									padding: "5px", // Inner padding
									transition: "transform 0.3s, box-shadow 0.3s", // Smooth hover effects
									"&:hover": {
										transform: "scale(1.03)", // Slight zoom effect
										boxShadow: "0px 7px 8px rgba(0, 0, 255, 0.45)", // Elevated shadow on hover
									},

									color: 'white',
									display: 'flex',
									flexWrap: 'wrap',
									borderTopRightRadius: '50px',
									borderTopLeftRadius: '50px',
									boxShadow: '8px 8px 1px rgba(71, 14, 14, 0.2)', // Initial shadow
									marginLeft: '2%',
									marginRight: '2%',
								}}
								action={
									<Box sx={{
										display: "flex",
										flexWrap: "wrap", // Allows wrapping to the next row on smaller screens
										gap: 2, // Spacing between cards
										justifyContent: "center", // Center the cards horizontally

									}}>
										<CardActions sx={{ marginRight: '10vw', marginBottom: '5vh' }}>
											<ExpandMore
												expand={expandedViewFlowIndex === index}
												onClick={() => handleViewCardFlowExpand(index)}
												aria-expanded={expandedViewFlowIndex === index}
												aria-label="show more"
											>
												<ExpandMoreIcon sx={{
													color: 'white',
													borderRadius: 5,
													backgroundColor: 'rgba(172, 172, 243, 0.45)',
												}} />

											</ExpandMore>
										</CardActions>
									</Box>
								}
							/>
							<ViewCardFlow item={item} index={index} expandedViewFlowIndex={expandedViewFlowIndex} />
							{/* <ViewDataCard item={item} handleExpandedViewDataCard={setExpandedDataCard()} expandedDataCard={expandedDataCard} /> */}
							{/* <ViewDataCard item={item} index={index} expandedCardIndex={expandedCardIndex} /> */}
						</Grid>
					))
				)
					: (
						// <Typography>`${errors}`</Typography>
						<></>
					)
				}
			</Grid>
		</Paper >
	);

}



const ExpandMore = styled((props) => {
	const { expand, ...other } = props;
	return <IconButton  {...other} />;
})(({ theme }) => ({
	marginLeft: 'auto',
	transition: theme.transitions.create('transform', {
		duration: theme.transitions.duration.shortest,
	}),
	variants: [
		{
			props: ({ expand }) => !expand,
			style: {
				transform: 'rotate(0deg)',
			},
		},
		{
			props: ({ expand }) => !!expand,
			style: {
				transform: 'rotate(180deg)',
			},
		},
	],
}));