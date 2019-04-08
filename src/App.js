import React from 'react'
import Header from './components/common/header';
import Footer from './components/common/footer';
import Pages from './components/routes/pages';
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
	return (
		<Router>
			<Header />
			<Pages />
			<Footer />
		</Router>
	)
}

export default App