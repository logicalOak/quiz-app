import { Box, Button, CircularProgress, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { SelectField, TextFieldComp } from '../components';
import useAxios from '../hooks/useAxios';

const Settings = () => {
	const { response, error, loading } = useAxios({ url: '/api_category.php' });

	if (loading) {
		return (
			<Box mt={20}>
				<CircularProgress />
			</Box>
		);
	}

	if (error) {
		return (
			<Typography variant='h6' mt={20} color='red'>
				Some Went Wrong.
			</Typography>
		);
	}

	const difficultyOptions = [
		{ id: 'easy', name: 'Easy' },
		{ id: 'medium', name: 'Medium' },
		{ id: 'hard', name: 'Hard' },
	];

	const typeOptions = [
		{ id: 'multiple', name: 'Multiple Choise' },
		{ id: 'boolean', name: 'True/False' },
	];

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<>
			<Typography variant='h2' fontWeight='bold'>
				Quiz App
			</Typography>
			<form onSubmit={handleSubmit}>
				<SelectField
					options={response.trivia_categories}
					label='Category'
				/>
				<SelectField options={difficultyOptions} label='Difficulty' />
				<SelectField options={typeOptions} label='Type' />
				<TextFieldComp />
				<Box mt={3} width='100%'>
					<Link to='/questions'>
						<Button fullWidth variant='contained' type='submit'>
							Get Started
						</Button>
					</Link>
				</Box>
			</form>
		</>
	);
};

export default Settings;
