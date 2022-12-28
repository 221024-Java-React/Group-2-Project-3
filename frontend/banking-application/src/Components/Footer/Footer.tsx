import { Link } from "react-router-dom";

import "./Footer.css";

const Footer = () => {

	return (
        <div className="footer">
            <div className="footer-flex-container">
                <Link to="/help" className="footer-flex-item">Help</Link>
                <Link to="/faqs" className="footer-flex-item">FAQs</Link>
                <Link to="/about" className="footer-flex-item">About Us</Link>
            </div>
		</div>
	);
};

export default Footer;
