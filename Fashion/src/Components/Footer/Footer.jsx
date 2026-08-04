import React from "react";
import "././Footer.css";

import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaCcVisa,
  FaPaypal,
  FaCcMastercard,
  FaCcPaypal,
  FaApplePay,
} from "react-icons/fa";

import { SiAmericanexpress } from "react-icons/si";
import { HiOutlineXMark } from "react-icons/hi2";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Left */}
        <div className="footer-col logo-col">

          <div className="logo">
            <HiOutlineXMark className="logo-icon" />
            <div>
              <h2>URBAN NOMAD</h2>
            </div>
          </div>

          <p>
            Timeless fashion for the modern man.
            <br />
            Quality, comfort and style — every day.
          </p>

          <div className="socials">
            <FaFacebookF />
            <FaInstagram />
            <FaPinterestP />
          </div>

        </div>

        {/* Shop */}
        <div className="footer-col">
          <h4>SHOP</h4>

          <ul>
            <li>All Products</li>
            <li>T-Shirts</li>
            <li>Shirts</li>
            <li>Jeans</li>
            <li>Jackets</li>
            <li>Shoes</li>
            <li>Accessories</li>
          </ul>
        </div>

        {/* Company */}
        <div className="footer-col">
          <h4>COMPANY</h4>

          <ul>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Careers</li>
            <li>Our Stores</li>
            <li>Size Guide</li>
            <li>FAQs</li>
          </ul>
        </div>

        {/* Customer Service */}
        <div className="footer-col">
          <h4>CUSTOMER SERVICE</h4>

          <ul>
            <li>Shipping & Delivery</li>
            <li>Returns & Exchanges</li>
            <li>Payment Methods</li>
            <li>Track Order</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-col">
          <h4>CONTACT</h4>

          <ul>
            <li>hello@urbannomad.com</li>
            <li>+1 (800) 123-4567</li>
            <li>
              123 Fashion Street
              <br />
              New York, NY 10001
            </li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">

        <p>© 2024 Urban Nomad. All rights reserved.</p>

        <div className="payments">
          <FaCcVisa />
          <FaCcMastercard />
          <SiAmericanexpress />
          <FaPaypal />
          <FaApplePay />
        </div>

      </div>

    </footer>
  );
}

export default Footer;