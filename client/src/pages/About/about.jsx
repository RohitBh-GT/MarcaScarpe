import React from 'react';
import Navbar from '../../components/Navbar/navbar.jsx';
import Footer from '../../components/Footer/footer.jsx';
import './styles.css';

const AboutUs = () => {
    return (
        <div className='aboutPage'>
            <Navbar />
            <div className='aboutUs'>
                <h2 style={{ textAlign: 'center', textDecoration: 'underline' }}>About Us</h2>
                <div>
                    <h3>About Marca Scarpe</h3>
                    Marca Scarpe is the best website to buy all the branded shoes at best prices available.It includes 
                    7 brands of shoes for all types of Genders and user can buy them at best prices.Website is user friendly.

                    <h3>Technologies Used</h3>
                    <p>Our core aim has always been to provide amazing User Interface and experience. Top deals are changed everyday. 
                    Technologies which we used are:-
                    <ul>
                    <li>React Js</li>
                    <li>Express Js</li>
                    <li>Node Js</li>
                    <li>Mongo Db</li>
                    <li>Redux</li>
                    <li>Stripe.js</li>
                    <li>React Material UI</li></ul>
                    </p>
                    <h3>Credits</h3>
                    <p>Made by Rohit Bhalla.</p>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default AboutUs;