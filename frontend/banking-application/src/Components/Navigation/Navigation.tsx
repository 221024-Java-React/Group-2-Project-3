import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faRightFromBracket, faUser } from "@fortawesome/free-solid-svg-icons";

import "./Navigation.css";

const Navigation = () => {

	const [searchValue, setSearchValue] = useState<string>("");
    const { loggedInUser, search, logout } = useContext(AuthContext);

	const searchValueHandler = (event: any) => {
		setSearchValue(event.target.value);
	};

	const searchHandler = (event: any) => {
		event.preventDefault();

		search(searchValue);
	};

	const logoutHandler = (event: any) => {
		// event.preventDefault();

		logout();
	}

	return (
        <div className="navbar">
            <div>
            {loggedInUser.id != -1 && (
					<Link to="/profile"><FontAwesomeIcon className="profile" icon={faUser} /></Link>
                )}
            </div>
            <Link to="/">
                <img className="logo" src="https://media.discordapp.net/attachments/1053413630856679518/1058440136255352903/MAJIC_BANK.png" />
                {/* <h1 className="brand">MAJIC BANK</h1> */}
            </Link>
			<div className="nav">
				{/* <form onSubmit={searchHandler}>
					<input
                        type="text"
                        name="search"
                        value={searchValue}
                        placeholder="Search"
                        onChange={searchValueHandler}
                    />
					<button className="icon-button" type="submit"><FontAwesomeIcon icon={faSearch} /></button>
					</form> */}
				{loggedInUser.id != -1 && (
					<Link to="/login" onClick={logoutHandler}>
						<span className="text">Logout </span>
						<button className="icon-button"><FontAwesomeIcon icon={faRightFromBracket} /></button>
					</Link>
				)}
			</div>
		</div>
	);
};

export default Navigation;
