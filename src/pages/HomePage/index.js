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
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export function Home() {
	return (
		<div className={style.general}>
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
							<Link to={'/'} style={{ textDecoration: 'none' }}>
								<ArrowBackIcon
									sx={{ fontSize: 30, color: '#ffffff' }}
								></ArrowBackIcon>
							</Link>
						</IconButton>
						<Typography
							variant='h6'
							component='div'
							sx={{ flexGrow: 1 }}
							style={{ marginRight: '50px' }}
							className={style.homeBar}
						>
							<strong>Home</strong>
						</Typography>
					</Toolbar>
				</AppBar>
			</Box>
			<div>
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
							style={{ width: '146px' }}
						>
							ADD NEW
						</Button>
					</Link>
				</div>
			</div>
		</div>
	);
}
