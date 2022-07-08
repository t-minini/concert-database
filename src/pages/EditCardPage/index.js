import axios from 'axios';
import { CountrySelect } from '../../components/CountrySelect';
import { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import style from './style.module.css';

// MATERIAL UI COMPONENTS
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import FormControl from '@mui/material/FormControl';

export function EditCardPage() {
	const navigate = useNavigate();

	const [value, setValue] = useState();

	const [country, setCountry] = useState({ label: '' });

	const { id } = useParams();

	const [form, setForm] = useState({
		owner: '',
		concert: '',
		artist: '',
		date: '',
		country: '',
		city: '',
		rating: '',
	});

	useEffect(() => {
		async function fetchConcerts() {
			try {
				const response = await axios.get(
					`https://ironrest.herokuapp.com/project-two-tulio-lucas/${id}`
				);
				// console.log(response);
				setForm(response.data);
			} catch (error) {
				console.log(error);
			}
		}

		fetchConcerts(id);
	}, [id]);

	useEffect(() => {
		setForm({ ...form, country: country.label });
	}, [country]);

	function handleChange(event) {
		setForm({ ...form, [event.target.name]: event.target.value });
	}

	function handleCountry(event, newValue) {
		setCountry(newValue);
	}

	function handleRating(event, newValue) {
		setValue(newValue);
		setForm({ ...form, [event.target.name]: event.target.value });
	}

	async function handleSubmit(event) {
		event.preventDefault();
		try {
			const clone = { ...form };

			delete clone._id;
			await axios.put(
				`https://ironrest.herokuapp.com/project-two-tulio-lucas/${id}`,
				clone
			);
			navigate('/home');
		} catch (error) {
			console.log(error);
		}
	}

	async function handleDelete() {
		try {
			const response = await axios.delete(
				`https://ironrest.herokuapp.com/project-two-tulio-lucas/${id}`
			);
			// console.log(response._id);
			navigate('/home');
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<div className={style.general}>
			<Box sx={{ flexGrow: 1 }}>
				<AppBar position='static' style={{ backgroundColor: '#E66A12' }}>
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
						<Typography
							variant='h6'
							className={style.pageTitle}
							component='div'
							sx={{ flexGrow: 1 }}
							style={{ marginRight: '50px' }}
						>
							<strong>Edit Card</strong>
						</Typography>
					</Toolbar>
				</AppBar>
			</Box>
			<form onSubmit={handleSubmit} className={style.editForm}>
				<TextField
					className={style.editInput}
					id='concert-tour'
					label='Concert/Tour'
					variant='outlined'
					name='concert'
					value={form.concert}
					onChange={handleChange}
					style={{ marginTop: '20px' }}
				/>
				<TextField
					className={style.editInput}
					id='artist'
					label='Artist'
					variant='outlined'
					name='artist'
					value={form.artist}
					onChange={handleChange}
				/>
				<FormControl>
					<InputLabel id='demo-simple-select-label'>Ateendee</InputLabel>
					<Select
						className={style.formControl}
						labelId='demo-simple-select-label'
						id='demo-simple-select'
						name='owner'
						value={form.owner}
						label='Ateendee'
						onChange={handleChange}
					>
						<MenuItem value={'Tulio Minini'}>Tulio Minini</MenuItem>
						<MenuItem value={'Lucas Colombo'}>Lucas Colombo</MenuItem>
					</Select>
				</FormControl>
				<TextField
					className={style.editInput}
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
					className={style.editInput}
					style={{ marginTop: '15px' }}
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
					className={style.editRating}
				>
					<div className={style.rating}>
						<Typography style={{ fontSize: '25px' }} component='legend'>
							Rating
						</Typography>
						<Rating
							name='rating'
							style={{ fontSize: '50px' }}
							className={style.starRating}
							precision={1}
							value={Number(form.rating)}
							onChange={handleRating}
						/>
					</div>
				</Box>

				<div className={style.editBtn}>
					<Button
						type='submit'
						size='medium'
						variant='contained'
						color='success'
						className={style.btnStyle}
					>
						SAVE CHANGES
					</Button>
					<Button
						size='medium'
						variant='contained'
						color='error'
						startIcon={<DeleteIcon />}
						onClick={handleDelete}
						className={style.btnStyle}
					>
						DELETE CARD
					</Button>
				</div>
			</form>
		</div>
	);
}
