import React from 'react'
// import Header from './components/common/header';
// import Footer from './components/common/footer';
import Modal from './components/modals/modal';
import Toast from "./components/Toast/toast"
import Pages from './components/routes/pages';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux';
import store from "./redux"
// import WhatsApp from './components/common/whatsapp';

const App = () => {
	return (
		<Provider store={store}>
			<Router>
				{/* <Header /> */}
				<Pages />
				{/* <Footer /> */}
				<Modal />
				<Toast />
				{/* <WhatsApp /> */}
			</Router>
		</Provider>
	)
}

export default App