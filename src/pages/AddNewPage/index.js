import TextField from '@mui/material/TextField';
import { CountrySelect } from '../../components/CountrySelect';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

export function AddNewPage() {
	const navigate = useNavigate();

	const [value, setValue] = useState(2);

	const [form, setForm] = useState({
		owner: '',
		concert: '',
		artist: '',
		date: '',
		country: '',
		city: '',
		rating: value,
	});

	function handleChange(event) {
		setForm({ ...form, [event.target.name]: event.target.value });
	}

	async function handleSubmit(event) {
		event.preventDefault();
		try {
			await axios.post(
				'https://ironrest.herokuapp.com/project-two-tulio-lucas',
				form
			);
			navigate('/');
		} catch (error) {
			console.log(error);
		}
	}

	console.log(value);
	console.log(form);

	return (
		<>
			<form onSubmit={handleSubmit}>
				<InputLabel id='demo-simple-select-label'>Owner</InputLabel>
				<Select
					labelId='owner'
					id='owner'
					name='owner'
					value={form.owner}
					label='owner'
					onChange={handleChange}
				>
					<MenuItem value={'Tulio Minini'}>Tulio Minini</MenuItem>
					<MenuItem value={'Lucas Colombo'}>Lucas Colombo</MenuItem>
				</Select>
				<TextField
					id='concert-tour'
					label='Concert/Tour'
					variant='outlined'
					name='concert'
					value={form.concert}
					onChange={handleChange}
				/>
				<TextField
					id='artist'
					label='Artist'
					variant='outlined'
					name='artist'
					value={form.artist}
					onChange={handleChange}
				/>
				<TextField
					id='date'
					label='Date'
					variant='outlined'
					name='date'
					value={form.date}
					onChange={handleChange}
				/>
				<CountrySelect
					value={form.country}
					name='country'
					onChange={handleChange}
				/>
				<TextField
					id='city'
					label='City'
					variant='outlined'
					name='city'
					value={form.city}
					onChange={handleChange}
				/>
				<Box
					sx={{
						'& > legend': { mt: 2 },
					}}
				>
					<Typography component='legend'>Rating</Typography>
					<Rating
						name='rating'
						defaultValue={2.5}
						precision={0.5}
						value={value}
						onChange={(target, newValue) => {
							setValue(newValue);
						}}
					/>
				</Box>
				<Button variant='contained' type='submit'>
					Submit
				</Button>
			</form>
		</>
	);
}
