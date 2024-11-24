import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './layout/Layout'
import Home from './components/home/Home'
import Auth from './components/auth/Auth'

function App() {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<Home />} />
					<Route path='auth/:type' element={<Auth />} />
				</Route>
				q
			</Routes>
		</Router>
	)
}

export default App
