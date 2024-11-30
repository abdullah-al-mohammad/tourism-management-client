import React from 'react';
import Header from '../header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../footer/Footer';

const Main = () => {
	return (
		<div>
			<Header></Header>
			<Outlet></Outlet>
			<Footer></Footer>
		</div>
	);
};

export default Main;