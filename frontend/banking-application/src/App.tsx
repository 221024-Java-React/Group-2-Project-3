import React from 'react';
import { useContext, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { AuthContext } from './Context/AuthContext';

import Home from './Components/Home/Home';
import Login from './Components/Login/Login';

import './App.css';
import Register from './Components/Register/Register';
import Profile from './Components/Profile/Profile';

function App() {

	const { loggedInUser } = useContext(AuthContext);

	return (
		<Routes>
			{loggedInUser.id != -1 && (
				<>
					<Route path="/" element={<Home />} />
					<Route path="*" element={<Home />} />
					<Route path='/profile' element={<Profile />} />
				</>
			)}
			{loggedInUser.id === -1 && (
				<>
					<Route path="/login" element={<Login />} />
          			<Route path="/register" element={<Register />} />
					<Route path="*" element={<Login />} />
				</>
			)}
   
		</Routes>
	);
}

export default App;