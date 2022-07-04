import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export function EnterPage() {
	return (
		<>
			<h1>CONCERT'S DATABASE</h1>
			<Link to={`/home`} style={{ textDecoration: 'none' }}>
				<Button variant='contained'>ENTER</Button>
			</Link>
		</>
	);
}
