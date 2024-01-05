import React, { forwardRef } from 'react';

const Footer = forwardRef((props, ref) => {
    
  return (
    <div ref={ref} style={{ height: "300px", backgroundColor: "black", color: "white", paddingBottom: "20px" }} className='footerContainer'>
      <footer>
        <div className="footer-content" style={{ display: "grid", gridTemplateColumns: "repeat(3 ,1fr)", margin: "3vw", justifyItems: "center", paddingTop: "30px" }}>
          <div className="footer-section about">
            <h2>About Us</h2>
            <p style={{ marginTop: "20px" }}>
              Introducing Kalvium Books, where the joy of reading meets the magic of cost-free literature. Our platform is dedicated to providing book enthusiasts with a vast collection of captivating titles at the unbeatable price of zero. Dive into a world where knowledge, entertainment, and inspiration are accessible to everyone, completely free of charge.
            </p>
          </div>

          <div className="footer-section contact">
            <h2>Contact Us</h2>
            <p style={{ marginTop: "20px" }}>
              Email: sharugeshwaran.k@gmail.com<br />
              Phone: +91 8098036663
            </p>
          </div>

          <div className="footer-section links">
            <h2>Quick Links</h2>
            <ul style={{ marginTop: "20px" }}>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p style={{ textAlign: "center" }}>&copy; 2024 Your Website. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
});

export default Footer;
