import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeCategory, changeDifficulty, changeType } from '../redux/actions';

const SelectField = ({ options, label }) => {
	const dispatch = useDispatch();
	const [value, setValue] = useState('');

	const handleChange = (e) => {
		setValue(e.target.value);
		switch (label) {
			case 'Category':
				dispatch(changeCategory(e.target.value));
				break;
			case 'Difficulty':
				dispatch(changeDifficulty(e.target.value));
				break;
			case 'Type':
				dispatch(changeType(e.target.value));
				break;
			default:
				return;
		}
	};
	return (
		<Box mt={3} width='100%'>
			<FormControl fullWidth size='small'>
				<InputLabel>{label}</InputLabel>
				<Select value={value} label={label} onChange={handleChange}>
					{options.map(({ id, name }) => (
						<MenuItem value={id} key={id}>
							{name}
						</MenuItem>
					))}
				</Select>
			</FormControl>
		</Box>
	);
};

export default SelectField;
