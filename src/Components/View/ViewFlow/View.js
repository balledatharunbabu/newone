import { Box, Card, CardContent, IconButton, ListItemText } from '@mui/material';
import React, { useState, useEffect, useCallback, useContext } from 'react';
// import TextField from '@mui/material/TextField';
// import { AlignHorizontalCenter, AlignHorizontalCenterOutlined, ElevatorOutlined, ForkLeft, FormatAlignJustify, Height, HeightOutlined, Margin, Padding } from '@mui/icons-material';
import {
	FormControl, OutlinedInput, InputLabel, useMediaQuery, InputAdornment, Grid2,
	CardHeader, Typography
} from '@mui/material';
// import { Center } from '@chakra-ui/react';
import CustomInput from '../Custom/CustomInput';
import SearchIcon from '@mui/icons-material/Search';
// import { red } from '@mui/material/colors';
import axios from 'axios';
import Grid from '@mui/material/Grid';
import CustomIconButton from '../Custom/CustomIconButton';
import CardActions from '@mui/material/CardActions';
// import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import Collapse from '@mui/material/Collapse';
import { styled } from '@mui/material/styles';
// import ViewDnDFlow from '../temp/ViewDnDFlow';
import ViewCardFlow from './ViewCardFlow'
import HeaderTwo from '../../headerTwo'

export default function View() {

	const isMobile = useMediaQuery('(max-width:600px)');

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
	}, []); // Empty dependency array ensures the handler doesn't get recreated




	const handleSearch = async (event) => {
		event.preventDefault();
		// setSearchFields(searchFields);
		// setValidateSearchItem(false); // Reset the items list before the search
		try {
			console.log("search fields ", searchFields.id, searchFields.name, searchFields.region)
			const search = `http://172.17.1.72:9090/view/search?flowId=${searchFields.id}&flowName=${searchFields.name}&region=${searchFields.region}`;
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
			}
		} catch (error) {
			console.error("Error fetching flow data:", error);
		}
	};

	const handleSearchAll = async (event) => {
		event.preventDefault();
		const viewAll = `http://172.17.1.72:9090/view/showAll`;
		axios.get(viewAll)
			.then(response => {
				// setItems(response.data);
				console.log("Response object:", response.data[0]);
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

	// // To log items outside the function as JSON
	// useEffect(() => {
	// 	console.log("Updated Items State as JSON:", items);
	// }, [items]);

	const [expandedViewFlowIndex, setExpandedViewFlowIndex] = React.useState(null);

	const handleViewCardFlowExpand = (index) => {
		setExpandedViewFlowIndex((prevIndex) => (prevIndex === index ? null : index));
	};


	return (
		<Box >
			<HeaderTwo/>
			<Card component="form"
				sx={{
					minWidth: isMobile ? window.width - '600px' : window.width - '60%',
					margin: 16,
					marginLeft: 40,
					marginRight: window.width - 40,
					paddingTop: 4,
					paddingLeft: 5,
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
				}
				}
				noValidate
				autoComplete="off">
				<CardContent xs={24} sm={6}>
					<CustomInput
						id="Id"
						label="Id"
						name="id"
						value={searchFields.id}
						onChange={handleOnChange}
						sx={{ marginBottom: '20px', FormatAlignJustify: 'center' }} />

					<CustomInput
						id="Name"
						label="Name"
						name="name"
						value={searchFields.name}
						onChange={handleOnChange}
						sx={{ marginBottom: '20px', FormatAlignJustify: 'center' }} />
					<CustomInput
						id="region"
						label="region"
						name="region"
						value={searchFields.region}
						onChange={handleOnChange}
						sx={{ marginBottom: '20px', FormatAlignJustify: 'center' }} />
					{/* search  */}
					<CustomIconButton
						onClick={handleSearch}
						label="Search"
						icon={<SearchIcon />}
						sx={{ width: '120px', marginLeft: 50, backgroundColor: '#123456' }} // Optional custom styles
					/>

					<CustomIconButton
						onClick={handleSearchAll}
						label="viewAll"
						// icon={<SearchIcon />}
						sx={{ width: '120px', marginLeft: 10, backgroundColor: '#123456' }} // Optional custom styles
					/>
				</CardContent>
			</Card>
			<Grid container spacing={0} >
				{
					console.log("items --> ", items)
				}
				{(validateSearchItem === true && Array.isArray(items) > 0) ? (
					items.map((item, index) => (

						<Grid item xs={24} key={index} sx={{ marginTop: '2%' }}>
							<CardHeader
								title={item.flowId + "." + item.flowName + "." + item.region}
								sx={{
									backgroundColor: 'rgba(0, 0, 255, 0.2)',
									color: 'white',
									display: 'flex',
									flexWrap: 'wrap',
									borderTopRightRadius: '50px',
									borderTopLeftRadius: '50px',
									boxShadow: '8px 8px 1px rgba(0, 0, 0, 0.2)', // Initial shadow
									marginLeft: '2%',
									marginRight: '2%',
									'&:hover': {
										transform: 'scale(1.02)', // Slight hover effect
										boxShadow: '8px 8px 1px rgba(216, 44, 44, 0.3)', // Initial shadow
									},
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

												<ExpandMoreIcon />

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
						// <Typography>No items available</Typography>
						<></>
					)
				}
			</Grid>
		</Box >
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