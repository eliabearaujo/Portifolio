import React from 'react';
import { ReactComponent as Scroll } from '../../Assets/scroll.svg';

const ScrollDown = () => {
  return (
    <div className="home_scroll">
      <a href="#about" className="home_scroll_button button--flex">
        <Scroll />
        <span className="home_scroll_name">Scroll Down</span>
        <i className="uil uil-arrow-down home_scroll_arrow"></i>
      </a>
    </div>
  );
};

export default ScrollDown;
