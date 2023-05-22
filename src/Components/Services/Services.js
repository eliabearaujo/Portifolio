import React from 'react';
import './Services.css';

const Services = () => {
  const [toggleState, setToggleState] = React.useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="services section" id="services">
      <h2 className="section_title">Services</h2>
      <span className="section_subtitle">What I offer</span>

      <div className="services_container container grid">
        <div className="services_content">
          <div className="">
            <i className="uil uil-web-grid services_icon"></i>
            <h3 className="services_title">
              Product <br /> Design
            </h3>
          </div>
          <span
            className="services_button"
            onClick={() => {
              toggleTab(1);
            }}
          >
            View More
            <i className="uil uil-arrow-right services_button_icon"></i>
          </span>
          <div
            className={
              toggleState === 1
                ? 'services_modal active_modal'
                : 'services_modal'
            }
          >
            <div className="services_modal_content">
              <i
                className="uil uil-times services_modal_close"
                onClick={() => {
                  toggleTab(0);
                }}
              ></i>
              <h3 className="services_modal_title">Product Designer</h3>
              <p className="services_modal_description">
                blajsbd asopdba sd oasidh aosdh aoiw oaishd owiudahsoud hwouadh
                osudhwouahd owudha ou
              </p>
              <ul className="services_modal_services grid">
                <li className="services_modal_service">
                  <i className="uil uil-check-circle services_modal_icon"></i>
                  <p className="services_modal_info">
                    I develop the user interface
                  </p>
                </li>

                <li className="services_modal_service">
                  <i className="uil uil-check-circle services_modal_icon"></i>
                  <p className="services_modal_info">Webpage development</p>
                </li>

                <li className="services_modal_service">
                  <i className="uil uil-check-circle services_modal_icon"></i>
                  <p className="services_modal_info">UX element interactions</p>
                </li>

                <li className="services_modal_service">
                  <i className="uil uil-check-circle services_modal_icon"></i>
                  <p className="services_modal_info">Companys Brand</p>
                </li>

                <li className="services_modal_service">
                  <i className="uil uil-check-circle services_modal_icon"></i>
                  <p className="services_modal_info">Design and Mockups</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services_content">
          <div className="">
            <i className="uil uil-arrow services_icon"></i>
            <h3 className="services_title">
              UI/UX <br /> Designer
            </h3>
          </div>
          <span
            className="services_button"
            onClick={() => {
              toggleTab(2);
            }}
          >
            View More
            <i className="uil uil-arrow-right services_button_icon"></i>
          </span>
          <div
            className={
              toggleState === 2
                ? 'services_modal active_modal'
                : 'services_modal'
            }
          >
            <div className="services_modal_content">
              <i
                className="uil uil-times services_modal_close"
                onClick={() => {
                  toggleTab(0);
                }}
              ></i>
              <h3 className="services_modal_title">UI/UX Designer</h3>
              <p className="services_modal_description">
                blajsbd asopdba sd oasidh aosdh aoiw oaishd owiudahsoud hwouadh
                osudhwouahd owudha ou
              </p>
              <ul className="services_modal_services grid">
                <li className="services_modal_service">
                  <i className="uil uil-check-circle services_modal_icon"></i>
                  <p className="services_modal_info">
                    I develop the user interface
                  </p>
                </li>

                <li className="services_modal_service">
                  <i className="uil uil-check-circle services_modal_icon"></i>
                  <p className="services_modal_info">Webpage development</p>
                </li>

                <li className="services_modal_service">
                  <i className="uil uil-check-circle services_modal_icon"></i>
                  <p className="services_modal_info">UX element interactions</p>
                </li>

                <li className="services_modal_service">
                  <i className="uil uil-check-circle services_modal_icon"></i>
                  <p className="services_modal_info">Companys Brand</p>
                </li>

                <li className="services_modal_service">
                  <i className="uil uil-check-circle services_modal_icon"></i>
                  <p className="services_modal_info">Design and Mockups</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services_content">
          <div className="">
            <i className="uil uil-edit services_icon"></i>
            <h3 className="services_title">
              Visual <br /> Designer
            </h3>
          </div>
          <span
            className="services_button"
            onClick={() => {
              toggleTab(3);
            }}
          >
            View More
            <i className="uil uil-arrow-right services_button_icon"></i>
          </span>
          <div
            className={
              toggleState === 3
                ? 'services_modal active_modal'
                : 'services_modal'
            }
          >
            <div className="services_modal_content">
              <i
                className="uil uil-times services_modal_close"
                onClick={() => {
                  toggleTab(0);
                }}
              ></i>
              <h3 className="services_modal_title">Visual Designer</h3>
              <p className="services_modal_description">
                blajsbd asopdba sd oasidh aosdh aoiw oaishd owiudahsoud hwouadh
                osudhwouahd owudha ou
              </p>
              <ul className="services_modal_services grid">
                <li className="services_modal_service">
                  <i className="uil uil-check-circle services_modal_icon"></i>
                  <p className="services_modal_info">
                    I develop the user interface
                  </p>
                </li>

                <li className="services_modal_service">
                  <i className="uil uil-check-circle services_modal_icon"></i>
                  <p className="services_modal_info">Webpage development</p>
                </li>

                <li className="services_modal_service">
                  <i className="uil uil-check-circle services_modal_icon"></i>
                  <p className="services_modal_info">UX element interactions</p>
                </li>

                <li className="services_modal_service">
                  <i className="uil uil-check-circle services_modal_icon"></i>
                  <p className="services_modal_info">Companys Brand</p>
                </li>

                <li className="services_modal_service">
                  <i className="uil uil-check-circle services_modal_icon"></i>
                  <p className="services_modal_info">Design and Mockups</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
