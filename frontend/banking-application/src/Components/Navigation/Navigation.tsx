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
        <div className="nav-row-container">
            <div className="nav-col-container left">
                <div>
                {loggedInUser.id != -1 && (
					<Link to="/profile"><FontAwesomeIcon className="profile" icon={faUser} /></Link>
                )}
            </div>
            </div>
            <div className="nav-col-container">
                <h1>
                    <Link to="/">
                        <img className="logo" src="https://cdn.discordapp.com/attachments/1053408347803627550/1058478463893377134/image.png" title="MAJIC Bank" />
                </Link>
            </h1>
                
            </div>
            <div className="nav-col-container right">
            <div>
				{loggedInUser.id != -1 && (
					<Link to="/login" onClick={logoutHandler}>
						<span className="text">Logout </span>
						<button className="icon-button"><FontAwesomeIcon icon={faRightFromBracket} /></button>
					</Link>
                    )}
                    </div>
            </div>
            
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
		</div>
	);
};

export default Navigation;
