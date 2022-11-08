import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
// import { CountrySelect } from '../../components/CountrySelect';
import style from './AddNewPage.module.css';

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
import FormControl from '@mui/material/FormControl';

export function AddNewPage() {
	const navigate = useNavigate();

	const [form, setForm] = useState({
		owner: '',
		concert: '',
		artist: '',
		date: '',
		country: '',
		city: '',
		rating: '',
	});

	const [value, setValue] = useState();

	// const [country, setCountry] = useState({ label: '' });

	function handleChange(event) {
		setForm({ ...form, [event.target.name]: event.target.value });
	}

	// function handleCountry(event, newValue) {
	// 	setCountry(newValue);
	// }

	// useEffect(() => {
	// 	setForm({ ...form, country: country.label });
	// }, [country]);

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

	return (
		<div className={style.general}>
			<Box className={style.bar} sx={{ flexGrow: 1 }}>
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
							component='div'
							sx={{ flexGrow: 1 }}
							style={{ marginRight: '50px' }}
						>
							<strong>Add New</strong>
						</Typography>
					</Toolbar>
				</AppBar>
			</Box>
			<form
				className={style.form}
				style={{ backgroundColor: 'white', marginTop: '10px' }}
				onSubmit={handleSubmit}
			>
				<div className={style.concert}>
					<TextField
						style={{ maginTop: '100px' }}
						className={style.textField}
						id='concert-tour'
						label='Concert/Tour'
						variant='outlined'
						name='concert'
						value={form.concert}
						onChange={handleChange}
					/>
				</div>
				<div>
					<TextField
						className={style.textField}
						id='artist'
						label='Artist'
						variant='outlined'
						name='artist'
						value={form.artist}
						onChange={handleChange}
					/>
				</div>
				<div>
					<FormControl className={style.textField}>
						<InputLabel id='demo-simple-select-label' >Attendee</InputLabel>
						<Select
							labelId='demo-simple-select-label'
							id='demo-simple-select'
							name='owner'
							value={form.owner}
							label='Attendee'
							onChange={handleChange}
							className={style.atendee}
						>
							<MenuItem value={'Tulio Minini'}>Tulio Minini</MenuItem>
						</Select>
					</FormControl>
				</div>
				<div>
					<TextField
						className={style.textField}
						id='date'
						label='Date'
						variant='outlined'
						name='date'
						value={form.date}
						onChange={handleChange}
					/>
				</div>
				{/* <div className={style.textField}>
					<CountrySelect
						country={country}
						handleCountry={handleCountry}
						name='country'
					/>
				</div> */}
				<div>
					<TextField
						className={style.textField}
						id='city'
						label='City'
						variant='outlined'
						name='city'
						value={form.city}
						onChange={handleChange}
					/>
				</div>
				<div>
					<TextField
						className={style.textField}
						id='country'
						label='Country'
						variant='outlined'
						name='country'
						value={form.country}
						onChange={handleChange}
					/>
				</div>
				<div className={style.rateBox}>
					<div className={style.textField}>
						<Box
							sx={{
								'& > legend': { mt: 2 },
							}}
						>
							<Typography component='legend' style={{ fontSize: '25px' }}>
								Rating
							</Typography>
							<Rating
								name='rating'
								defaultValue={1}
								precision={1}
								value={value}
								onChange={handleRating}
								style={{ fontSize: '50px' }}
								className={style.starRating}
							/>
						</Box>
					</div>
					<div>
						<Button
							className={style.textField}
							style={{ width: '146px' }}
							variant='contained'
							type='submit'
						>
							Submit
						</Button>
					</div>
				</div>
			</form>
		</div>
	);
}
