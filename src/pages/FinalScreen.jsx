import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { changeAmount, changeScore } from '../redux/actions';

const FinalScreen = () => {
	const { score } = useSelector((state) => state);
	const dispatch = useDispatch();

	const handleBackToSettings = () => {
		dispatch(changeScore(0));
		dispatch(changeAmount(50));
	};
	return (
		<>
			<Box mt={30}>
				<Typography variant='h3' fontWeight='bold' mb={3}>
					Final score {score}
				</Typography>
				<Link to='/'>
					<Button variant='outlined' onClick={handleBackToSettings}>
						Back to Settings
					</Button>
				</Link>
			</Box>
		</>
	);
};

export default FinalScreen;
