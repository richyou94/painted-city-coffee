import React from "react";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaDribbble,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="footer">
      <ul className="icons">
        <li>
          <a href="#" className="icon">
            <FaTwitter />
            <span className="label">Twitter</span>
          </a>
        </li>
        <li>
          <a href="#" className="icon">
            <FaFacebookF />
            <span className="label">Facebook</span>
          </a>
        </li>
        <li>
          <a href="#" className="icon">
            <FaInstagram />
            <span className="label">Instagram</span>
          </a>
        </li>
        <li>
          <a href="#" className="icon">
            <FaDribbble />
            <span className="label">Dribbble</span>
          </a>
        </li>
        <li>
          <a href="#" className="icon">
            <FaEnvelope />
            <span className="label">Email</span>
          </a>
        </li>
      </ul>
      <ul className="copyright">
        <li>&copy; Painted City Coffee</li>
      </ul>
    </footer>
  );
};

export default Footer;
