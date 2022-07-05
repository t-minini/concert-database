import { ConcertCard } from '../../components/ConcertCard';
import { Link } from 'react-router-dom';

//Material UI
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export function Home() {
	return (
		<>
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
			<ConcertCard />
			<Link to={'/add-new'} style={{ textDecoration: 'none' }}>
				<Button size='small' variant='contained' color='success'>
					ADD NEW
				</Button>
			</Link>
		</>
	);
}
