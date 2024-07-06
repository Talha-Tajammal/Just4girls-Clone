// src/components/Footer.js
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Upper Part */}
      <div className="footer-upper">
        <div className="footer-container">
          <div className="footer-item newsletter">
            <h2>Sign Up For Newsletter</h2>
            <p>Subscribe now to get updates on promotions and coupons.</p>
          </div>
          <div className="footer-item social signup">
            <form className="signup-form">
              <input type="email" placeholder="Your email address" required />
              <button type="submit">SIGN UP</button>
            </form>
          </div>

          <div className="footer-item contact-info">
            <p>
              Support question?{" "}
              <a href="mailto:info@just4girls.pk">info@just4girls.pk</a>
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Part */}
      <div className="footer-bottom">
        <div className="footer-container">
          <div className="footer-section">
            <h3>Contact Info</h3>
            <p>Hotline: 0343-282-9281</p>
            <p>Contact: (021)-3-468-0215</p>
            <p>
              Email: <a href="mailto:info@just4girls.pk">info@just4girls.pk</a>
            </p>
            <p>Timings: 10am - 6pm PST</p>
          </div>

          <div className="footer-section">
            <h3>INFORMATION</h3>
            <ul>
              <li>
                <a href="/about-us">About Us</a>
              </li>
              <li>
                <a href="/payment-options">Payment Options</a>
              </li>
              <li>
                <a href="/shipping-information">Shipping Information</a>
              </li>
              <li>
                <a href="/privacy-policy">Privacy Policy</a>
              </li>
              <li>
                <a href="/return-exchange">Return / Exchange</a>
              </li>
              <li>
                <a href="/contact-us">Contact Us</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>OUR PRODUCTS</h3>
            <ul>
              <li>
                <a href="/makeup">Makeup</a>
              </li>
              <li>
                <a href="/skincare">Skincare</a>
              </li>
              <li>
                <a href="/hair">Hair</a>
              </li>
              <li>
                <a href="/bath-body">Bath & Body</a>
              </li>
              <li>
                <a href="/fragrances">Fragrances</a>
              </li>
              <li>
                <a href="/gifts">Gifts</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>QUICK LINKS</h3>
            <ul>
              <li>
                <a href="/my-account">My Account</a>
              </li>
              <li>
                <a href="/order-status">Order Status</a>
              </li>
              <li>
                <a href="/order-history">Order History</a>
              </li>
            </ul>
            <h3>FOLLOW US ON</h3>
            <div className="social-media">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Tiktok
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h3>REVIEWS</h3>
            <a href="https://yotpo.com">
              <img
                src="https://staticw2.yotpo.com/assets/badge.png"
                alt="Yotpo Reviews"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
