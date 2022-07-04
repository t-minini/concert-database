import TextField from '@mui/material/TextField';
import { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';

export function AddNewPage() {
	return (
		<>
			<form>
				<TextField
					id='outlined-basic'
					label='Concert/Tour'
					variant='outlined'
				/>
				<TextField id='outlined-basic' label='Artist' variant='outlined' />
			</form>
		</>
	);
}
