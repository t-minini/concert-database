import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage/HomePage';
import { AddNewPage } from './pages/AddNewPage/AddNewPage';
import { EditCardPage } from './pages/EditCardPage/EditCardPage';
import { EnterPage } from './pages/EnterPage/EnterPage';

function App() {
	return (
		<div className='App'>
			<Routes>
				<Route path='/home' element={<HomePage />}></Route>
				<Route path='/add-new' element={<AddNewPage />}></Route>
				<Route path='/' element={<EnterPage />}></Route>
				<Route path='/edit/:id' element={<EditCardPage />}></Route>
			</Routes>
		</div>
	);
}

export default App;
