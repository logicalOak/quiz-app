import { Box, FormControl, TextField } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { changeAmount } from '../redux/actions';

const TextFieldComp = () => {
	const dispatch = useDispatch();
	const handleChange = (e) => {
		dispatch(changeAmount(e.target.value));
	};
	return (
		<>
			<Box mt={3} width='100%'>
				<FormControl fullWidth size='small'>
					<TextField
						onChange={handleChange}
						variant='outlined'
						label='Amount of Questions'
						size='small'
						type='number'
					/>
				</FormControl>
			</Box>
		</>
	);
};

export default TextFieldComp;
