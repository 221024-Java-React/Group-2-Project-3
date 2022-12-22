import { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { AuthContext } from './Context/AuthContext';

import Home from './Components/Home/Home';
import Login from './Components/Login/Login';

import './App.css';
import Register from './Components/Register/Register';
import Profile from './Components/Profile/Profile';
import ResetPW from "./Components/ResetPW/ResetPW";
import AccountPage from "./Components/AccountPage/AccountPage";

function App() {

	const { loggedInUser } = useContext(AuthContext);

	return (
		<Routes>
			{loggedInUser.id !== -1 && (
				<>
					<Route path="/" element={<Home />} />
					<Route path="*" element={<Home />} />
                    <Route path='/profile' element={<Profile />} />
                    <Route path='/checking' element={<AccountPage type={0} />} />
                    <Route path='/saving' element={<AccountPage type={1} />} />
                    <Route path='/loan' element={<AccountPage type={2} />} />
				</>
			)}
			{loggedInUser.id === -1 && (
				<>
					<Route path="/login" element={<Login />} />
          			<Route path="/register" element={<Register />} />
					<Route path="/reset" element={<ResetPW />} />
					<Route path="*" element={<Login />} />
				</>
            )}
		</Routes>
	);
}

export default App;
