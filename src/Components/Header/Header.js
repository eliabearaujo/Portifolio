import React from 'react';
import './Header.css';

const Header = () => {
  window.addEventListener('scroll', function () {
    const header = this.document.querySelector('.header');
    if (this.scrollY >= 80) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header');
  });

  const [toggle, setToggle] = React.useState(false);
  const [activeNav, setActiveNav] = React.useState('#home');
  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav_logo">
          Eliabe
        </a>
        <div className={toggle ? 'nav_menu show-menu' : 'nav_menu'}>
          <ul className="nav_list grid">
            <li className="nav_item">
              <a
                href="#home"
                onClick={() => {
                  setActiveNav('#home');
                }}
                className="nav_link active-link nav_item-link"
              >
                <i className="uil uil-estate nav_icon"></i> Home
              </a>
            </li>
            <li className="nav_item">
              <a
                href="#about"
                onClick={() => {
                  setActiveNav('#about');
                }}
                className="nav_link nav_item-link"
              >
                <i className="uil uil-user nav_icon"></i> About
              </a>
            </li>
            <li className="nav_item">
              <a href="#skills" className="nav_link nav_item-link">
                <i className="uil uil-file-alt nav_icon"></i> Skills
              </a>
            </li>
            <li className="nav_item">
              <a href="#services" className="nav_link nav_item-link">
                <i className="uil uil-briefcase nav_icon"></i> Services
              </a>
            </li>
            <li className="nav_item">
              <a href="#portfolio" className="nav_link nav_item-link">
                <i className="uil uil-scenery nav_icon"></i> Portfolio
              </a>
            </li>
            <li className="nav_item">
              <a href="#contact" className="nav_link nav_item-link">
                <i className="uil uil-message nav_icon"></i> Contact
              </a>
            </li>
          </ul>
          <i
            className="uil uil-times nav_close"
            onClick={() => {
              setToggle(!toggle);
            }}
          ></i>
        </div>
        <div
          className="nav_toggle"
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
