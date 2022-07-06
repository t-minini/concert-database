import { ConcertCard } from '../../components/ConcertCard';
import { Link } from 'react-router-dom';
import style from './style.module.css';

//Material UI
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';

export function Home() {
	return (
		<div className={style.general}>
			<Box sx={{ flexGrow: 1 }}>
				<AppBar position='static'>
					<Toolbar>
						<Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
							<strong>Home</strong>
						</Typography>
					</Toolbar>
				</AppBar>
			</Box>
			<h1>CONCERT'S DATABASE</h1>
			<Box sx={{ flexGrow: 1 }} direction='row'>
				<Grid container spacing={1} columns={{ xs: 12, sm: 8, md: 12 }}>
					<Grid item xs={12} sm>
						<ConcertCard />
					</Grid>
				</Grid>
			</Box>
			<Link to={'/add-new'} style={{ textDecoration: 'none' }}>
				<Button size='small' variant='contained' color='success'>
					ADD NEW
				</Button>
			</Link>
		</div>
	);
}
