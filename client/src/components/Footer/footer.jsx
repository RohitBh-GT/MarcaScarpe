import React from "react";
import {Box,Container,Row,Column,FooterLink,Heading} from "./styles.js";
import Logo from '../../assets/images/marcascarpe.png';
import { Home,Email,Phone,Facebook,LinkedIn,GitHub,Twitter } from '@material-ui/icons';
  
const Footer = () => {
  return (
      <div>
    <Box>
      <Container>
        <Row>
          <Column>
          <img src={Logo} width="70%" height="50%" />
         <p style={{color:'#fe6b02',fontSize:'17px',}}>Marca Scarpe is the best website to buy all the branded shoes at best prices available.</p>
          </Column>
          <Column>
            <Heading>Tech Used</Heading>
            <FooterLink href="https://reactjs.org/">React Js</FooterLink>
            <FooterLink href="https://nodejs.org/en/">Node Js</FooterLink>
            <FooterLink href="https://expressjs.com/">Express Js</FooterLink>
            <FooterLink href="https://www.mongodb.com/cloud">Mongo DB</FooterLink>
          </Column>
          <Column>
            <Heading>Useful Links</Heading>
            <FooterLink href="/your-account">Your Account</FooterLink>
            <FooterLink href="/your-wishlist">Your Wishlist</FooterLink>
            <FooterLink href="/about-marca-scarpe">About Us</FooterLink>
            <FooterLink href="/privacy-policy">Privacy Policy</FooterLink>
          </Column>
          <Column>
            <Heading>Contact Us</Heading>
            <FooterLink>
                <span style={{ marginLeft: "10px" }}>
                  <Home style={{fontSize:'24px',marginTop:'2px'}} /> Mohali,Punjab,India
                </span>
            </FooterLink>
            <FooterLink>
                <span style={{ marginLeft: "10px" }}>
                  <Email style={{fontSize:'22px',marginTop:'2px'}} /> mscarpe@gmail.com
                </span>
            </FooterLink>
            <FooterLink>
                <span style={{ marginLeft: "10px" }}>
                  <Phone style={{fontSize:'24px',marginTop:'2px'}} /> +91 xxxxxxx325
                </span>
            </FooterLink>
                <span style={{ marginLeft: "20px",color:'#fe6b02' }}>
                  <Facebook style={{cursor:'pointer'}} /> <Twitter style={{cursor:'pointer'}}/> <LinkedIn style={{cursor:'pointer'}}/> <GitHub style={{cursor:'pointer'}}/>
                </span>
          </Column>
        </Row>
      </Container>
    </Box>
    <div style={{backgroundColor:'#434141',color:'white',textAlign:'center',fontSize:'16px',padding:'10px',fontWeight:'bold'}} >&copy; Copyright {new Date().getFullYear()}. Marca Scarpe (MERN stack Web App)</div>
    </div>
  );
};
export default Footer;