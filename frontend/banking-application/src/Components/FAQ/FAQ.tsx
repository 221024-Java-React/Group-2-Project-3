import Background from '../Background/Background';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';

import '../AccountCard/AccountCard.css';
import { Link } from 'react-router-dom';

const FAQ = () => {

	return (
		<div className="page">
			<Background />
			<Navigation />
			<div className="content">
				<h2 className="content-header">Frequently Asked Questions</h2>
			</div>
			<div className="flex-column-container">
				<div className="flex-item">
					<h3>Find a location</h3>
					<p><Link to="/">Select this link to find a location near you.</Link></p>
				</div>
				<div className="flex-item">
					<h3>How can I contact customer service?</h3>
					<p>Customer service is available Monday through Friday from 8am- 6pm EST at 1-800-555-5555. </p>
				</div>
				<div className="flex-item">
					<h3>How do I find my routing and account numbers? </h3>
					<p>Log into your account with your username and password. Once successfully logged in,
						you are navigated to the home page. Under each account column,
						your account number is displayed with the last four digits hidden. 
						You must select “reveal account number”, to see your full account number. 
						The same process must be followed for the routing number which is found in the same section.
						Still need help? <Link to="/"> Select this link for digital tour. </Link></p>
				</div>
				<div className="flex-item">
					<h3>How do I report fraud?</h3>
					<p>Fraud can be reported to our customer service number at 1-800-555-5555, 
						press appropriate number for language in first prompt, then 3 for fraud. 
						The hours for customer service are Monday through Friday from 8am- 6pm EST.
						If fraud happens outside these hours, you can lock your card by logging in our website.
							<Link to="/"> Select this link for digital tour.</Link></p>
				</div>
				<div className="flex-item">
					<h3>How do I change my password or username? </h3>
					<p>Go to website, navigate to the bottom of the page on the right hand side, select forgot username or forgot password. 
						Type in email, SSN, new password/username and confirm.
					<Link to="/"> Select this link for digital tour.</Link>
					</p>
				</div>
				<div className="flex-item">
					<h3>How can I make an appointment? </h3>
					<p><Link to="/"> Select this link to make an appointment near you.</Link></p>
				</div>
				<div className="flex-item">
					<h3>How can I apply for a loan?</h3>
					<p><Link to="/"> Select this link to be navigated to our loan page.</Link></p>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default FAQ;
