import React from 'react';
import { useContext, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { AuthContext } from './Context/AuthContext';

import Home from './Components/Home/Home';
import Login from './Components/Login/Login';

import './App.css';

function App() {

	const { loggedIn } = useContext(AuthContext);

	return (
		<Routes>
			{loggedIn && (
				<>
					<Route path="/" element={<Home />} />
					<Route path="*" element={<Home />} />
				</>
			)}
			{!loggedIn && (
				<>
					<Route path="/login" element={<Login />} />
					<Route path="*" element={<Login />} />
				</>
			)}
		</Routes>
	);
}

export default App;
