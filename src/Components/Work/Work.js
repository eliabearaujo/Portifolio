import React from 'react';
import './Work.css';
import Works from './Works';

const Work = () => {
  return (
    <section className="work section" id="portfolio">
      <h2 className="section_title">Portifólio</h2>
      <span className="section_subtitle">Most recent works</span>

      <Works />
    </section>
  );
};

export default Work;
