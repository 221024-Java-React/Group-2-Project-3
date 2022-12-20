import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import "./Navigation.css";

const Navigation = () => {

	const [searchValue, setSearchValue] = useState<string>("");
	const { loggedInUser, search } = useContext(AuthContext);

	const searchValueHandler = (event: any) => {
        setSearchValue(event.target.value);
    };

	const searchHandler = (event: any) => {
		event.preventDefault();

		search(searchValue);
	};

	return (
		<div className="navbar">
            
			<Link to="/">
				<h1 className="brand">MAJIC BANK</h1>
            </Link>
			{ loggedInUser.id != -1 && (
				<div className="nav">
					<form onSubmit={searchHandler}>
					<input
                        type="text"
                        name="search"
                        value={searchValue}
                        placeholder="Search"
                        onChange={searchValueHandler}
                    />
					<button className="icon-button" type="submit"><FontAwesomeIcon icon={faSearch} /></button>
					</form>
				</div>
			)}
		</div>
	);
};

export default Navigation;
