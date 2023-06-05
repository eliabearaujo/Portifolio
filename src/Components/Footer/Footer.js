import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_container container">
        <h1 className="footer_title">Eliabe</h1>
        <ul className="footer_list">
          <li>
            <a href="" className="footer_link">
              About
            </a>
          </li>
          <li>
            <a href="" className="footer_link">
              Projects
            </a>
          </li>
          <li>
            <a href="" className="footer_link">
              Testimonials
            </a>
          </li>
          <li>
            <a href="" className="footer_link"></a>
          </li>
        </ul>
        <div className="footer_social">
          <a
            href="https://www.instagram.com/_eliabearaujo/"
            className="home_social_icon"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <i className="uil uil-instagram"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/eliabe-araujo-52a961163/"
            className="home_social_icon"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <i className="uil uil-linkedin"></i>
          </a>
          <a
            href="https://github.com/eliabearaujo"
            className="home_social_icon"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <i className="uil uil-github-alt"></i>
          </a>
        </div>
        <span className="footer_copy">Eliabe Araujo</span>
      </div>
    </footer>
  );
};

export default Footer;
