import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";

import "./Footer.css";

const Footer = () => {

    const { loggedInUser } = useContext(AuthContext);

	return (
        <div className="footer">
            <div className="footer-flex-container">
                <Link to="/help" className="footer-flex-item">Help</Link>
                <Link to="/faqs" className="footer-flex-item">FAQs</Link>
                <Link to="/about" className="footer-flex-item">About Us</Link>
                {loggedInUser.id == -1 && <>
                    <Link to="/retrieve" className="footer-flex-item">Forgot Username</Link>
                    <Link to="/reset" className="footer-flex-item">Forgot Password</Link>
                </>}
            </div>
		</div>
	);
};

export default Footer;
