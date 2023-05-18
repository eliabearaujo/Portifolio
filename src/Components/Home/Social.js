import React from 'react';

const Social = () => {
  return (
    <div className="home_social">
      <a
        href="https://www.instagram.com/_eliabearaujo/"
        className="home_social_icon"
        target="_blank"
        rel="noreferrer"
      >
        <i className="uil uil-instagram"></i>
      </a>
      <a
        href="https://www.linkedin.com/in/eliabe-araujo-52a961163/"
        className="home_social_icon"
        target="_blank"
        rel="noreferrer"
      >
        <i className="uil uil-linkedin"></i>
      </a>
      <a
        href="https://github.com/eliabearaujo"
        className="home_social_icon"
        target="_blank"
        rel="noreferrer"
      >
        <i className="uil uil-github-alt"></i>
      </a>
    </div>
  );
};

export default Social;
