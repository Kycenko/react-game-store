import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux';
import HomePage from './pages/Home/HomePage';
import GamePage from './pages/Game/GamePage';
import OrderPage from './pages/Order/OrderPage';
function App() {
	return (
		<Provider store={store}>
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/app/:title' element={<GamePage />} />
				<Route path='/order' element={<OrderPage />} />
			</Routes>
		</Provider>
	);
}

export default App;
