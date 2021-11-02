import React from 'react';
import Navbar from '../../components/Navbar/navbar.jsx';
import Footer from '../../components/Footer/footer.jsx';
import './styles.css';

const Privacy = () => {
    return (
        <div className='privacyPage'>
            <Navbar />
            <div className='privacyPolicies'>
                <h2 style={{textAlign:'center',textDecoration:'underline'}}>Privacy Policy</h2>
                <div>
                    <h3>Introduction</h3>
                    <p>We value the trust you place in us and recognize the importance of secure transactions and information privacy. This Privacy Policy describes how Marca Scarpe 
                        and its affiliates collect, use, share, protect or otherwise process your personal information through Marca Scarpe website.
                        You are not able to browse any section of the Platform without registering with us. By visiting this Platform, providing your information or availing any product/service
                        offered on the Platform, you expressly agree to be bound by the terms and conditions of this Privacy Policy, the Terms of Use and the applicable service/product terms and conditions, 
                        but not limited to the laws applicable to data protection and privacy. If you do not agree please do not use or access our Platform.</p>
                    <hr />
                    <h3>Collection</h3>
                    <p>We collect your personal information relating to your identity, phone no. and address when you use our Platform, services or otherwise interact with us during the course 
                        of our relationship and related information provided from time to time. Some of the information that we may collect includes 
                        but is not limited to: <ul><li>Information provided to us during sign-up/registering or using our Platform such as name, address, telephone/mobile number, email ID, and any such information shared as proof of identity or address.</li>
                        <li>We may also request you to check all these details to check your eligibility for certain products, services or events including but not limited to credit and payment products.</li>
                        <li>Some of the sensitive personal information such as your bank account or debit card or other payment instrument or password etc. are totally secured if you trust us.</li>
                        </ul></p>
                    <hr />    
                    <h3>Cookies</h3>
                    <p>We use data collection devices such as "cookies" on certain pages of the Platform to help analyse our web page flow, 
                        such as your account to remember it, and the items which you put in your carts etc. Cookies do not contain any of your personal information. We also use cookies to allow you to login into your account less frequently during a session.
                        Cookies can also help us provide information that is targeted to your interests.</p>
                    <hr />
                    <h3>Payment</h3>
                    <p>Please read this payment policy carefully. This website is just for the development
                        purpose. Payment gateway is enabled but the payment which you will pay will not be going
                        to any of the bank account so it is non refundable. And, the shoes which you will order will also not
                        going to deliver at your respective address. So please dont make any payments. This is just a project.
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Privacy;