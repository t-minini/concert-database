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
						<Typography
							variant='h6'
							component='div'
							sx={{ flexGrow: 1 }}
							className={style.homeBar}
						>
							<strong>Home</strong>
						</Typography>
					</Toolbar>
				</AppBar>
			</Box>
			<div className={style.scroll}>
				<Box sx={{ flexGrow: 1 }} direction='row'>
					<Grid container spacing={1}>
						<Grid item>
							<ConcertCard />
						</Grid>
					</Grid>
				</Box>
			</div>
			<div className={style.btn}>
				<Link to={'/add-new'} style={{ textDecoration: 'none' }}>
					<Button
						size='medium'
						variant='contained'
						color='success'
						className={style.addNew}
					>
						ADD NEW
					</Button>
				</Link>
			</div>
		</div>
	);
}
