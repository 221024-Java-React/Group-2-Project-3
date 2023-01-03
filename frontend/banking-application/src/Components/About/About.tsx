import Background from '../Background/Background';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';

import '../AccountCard/AccountCard.css';
import Advertisement from '../Advertisement/Advertisement';

const About = () => {

	return (
		<div className="page">
			<Background />
			<Navigation />
			<div className="content">
				<h2 className="content-header">About Us</h2>
			</div>
			<div className="login-flex-container">
				<div className="login-flex-3">
					<div className="advertisement">
						<p><em>MAJIC Bank's vision is to allow our customers to bank with ease.
							We strive to be the most trusted and accessible bank to our clients.
							The clients are the heart of the experience and so we want to create products and services which help
							them meet their financial needs with no hidden fees or minimum balance requirements.
							Our core value is to learn what matters the most to our clients because we recognize that our success
							comes from our client's success.</em></p>
						<br />
						<div className="nav-row-container">
							<div className="nav-col-container left"><h4>Download Our App</h4></div>
							<div className="nav-col-container right"><strong>MAJIC Mobile App</strong></div>
						</div>
						<div className="nav-row-container">
							<div className="nav-col-container left"><h4>Branch Hours</h4>
								<pre>
									Sun:  CLOSED<br />
									Mon:  CLOSED<br />
									Tue:  9:00AM - 5:00PM<br />
									Wed:  9:00AM - 5:00PM<br />
									Thu:  9:00AM - 5:00PM<br />
									Fri:  9:00AM - 5:00PM<br />
									Sat:  9:00AM - 2:00PM
								</pre>
							</div>
							<div className="nav-col-container right"><h4>ATM Hours</h4>
								<pre>
									Open 24 Hours<br />
									<br />
									<br />
									<br />
									<br />
									<br />
									Address
								</pre>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default About;
