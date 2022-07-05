import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { CountrySelect } from '../../components/CountrySelect';

// MATERIAL UI COMPONENTS
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';

export function AddNewPage() {
	const navigate = useNavigate();

	const [form, setForm] = useState({
		owner: '',
		concert: '',
		artist: '',
		date: '',
		country: '',
		city: '',
		rating: 3,
	});

	const [value, setValue] = useState(3);

	const [country, setCountry] = useState({ label: '' });

	function handleChange(event) {
		setForm({ ...form, [event.target.name]: event.target.value });
	}

	function handleCountry(event, newValue) {
		setCountry(newValue);
	}

	useEffect(() => {
		setForm({ ...form, country: country.label });
	}, [country]);

	function handleRating(event, newValue) {
		setValue(newValue);
		setForm({ ...form, [event.target.name]: event.target.value });
	}

	async function handleSubmit(event) {
		event.preventDefault();
		try {
			await axios.post(
				'https://ironrest.herokuapp.com/project-two-tulio-lucas',
				form
			);
			navigate('/home');
		} catch (error) {
			console.log(error);
		}
	}

	console.log(value);
	console.log(country);
	console.log(form);

	return (
		<>
			<Box sx={{ flexGrow: 1 }}>
				<AppBar position='static'>
					<Toolbar>
						<IconButton
							size='large'
							edge='start'
							color='inherit'
							aria-label='home'
							sx={{ mr: 2 }}
						>
							<Link to={'/home'} style={{ textDecoration: 'none' }}>
								<HomeIcon sx={{ fontSize: 30, color: '#ffffff' }}></HomeIcon>
							</Link>
						</IconButton>
						<Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
							<strong>Add New</strong>
						</Typography>
					</Toolbar>
				</AppBar>
			</Box>
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
					country={country}
					handleCountry={handleCountry}
					name='country'
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
						defaultValue={3}
						precision={1}
						value={value}
						onChange={handleRating}
					/>
				</Box>
				<Button variant='contained' type='submit'>
					Submit
				</Button>
			</form>
		</>
	);
}
