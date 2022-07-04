import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/HomePage';
import { AddNewPage } from './pages/AddNewPage';
import { EditCardPage } from './pages/EditCardPage';
import { EnterPage } from './pages/EnterPage';

function App() {
	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<Home />}></Route>
				<Route path='/add-concert' element={<AddNewPage />}></Route>
				<Route path='/enter' element={<EnterPage />}></Route>
				<Route path='/edit' element={<EditCardPage />}></Route>
			</Routes>
		</div>
	);
}

export default App;
