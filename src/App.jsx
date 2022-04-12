import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Settings, Questions, FinalScreen } from './pages';
import { Box, Container } from '@mui/material';

const App = () => {
	return (
		<Router>
			<Container maxWidth='sm'>
				<Box textAlign='center' mt={5}>
					<Routes>
						<Route path='/' exact element={<Settings />} />
						<Route
							path='/questions'
							exact
							element={<Questions />}
						/>
						<Route path='/score' exact element={<FinalScreen />} />
					</Routes>
				</Box>
			</Container>
		</Router>
	);
};

export default App;
