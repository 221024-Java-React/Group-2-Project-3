import Background from '../Background/Background';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';

import '../AccountCard/AccountCard.css';

const About = () => {

	return (
		<div className="page">
			<Background />
            <Navigation />
            <div className="content">
                <h2>About Us</h2>
                <p className="description">MAJIC Bank's vision is to allow our customers to bank with ease.
                        We strive to be the most trusted and accessible bank to our clients.
                        The clients are the heart of the experience and so we want to create products and services which help
                        them meet their financial needs with no hidden fees or minimum balance requirements.
                        Our core value is to learn what matters the most to our clients because we recognize that our success
                        comes from our client's success.</p>
			</div>
			<Footer />
		</div>
	);
};

export default About;
