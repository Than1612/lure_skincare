import React from 'react';
import logo from '../attachments/logo2.png';

const Footer = () => (
  <footer id="footer" className="mt-5">
    <div className="container">
      <div className="row d-flex flex-wrap justify-content-between py-5">
        <div className="col-md-4 col-sm-6">
          <div className="footer-menu footer-menu-001">
            <div className="footer-intro mb-4">
              <a href="index.html">
                <img src={logo} alt="logo" />
              </a>
            </div>
            <div className="social-links">
              <ul className="list-unstyled d-flex flex-wrap gap-4">
                <li>
                  <a href="https://www.instagram.com/lure_skinstudio?igsh=bW80bmoydDBvaHM3">
                    <svg width="24" height="24" viewBox="0 0 24 24" className="svg-color">
                      <use xlinkHref="#instagram"></use>
                    </svg>
                  </a>
                </li>
                {/* Add more social links if needed */}
              </ul>
            </div>
          </div>
        </div>
        {/* Add more footer sections as needed */}
      </div>
    </div>
    <div className="border-top py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-6 d-flex flex-wrap">
            {/* Add copyright or other information */}
          </div>
          <div className="col-md-6 text-md-end mt-3 mt-md-0">
            <p>© Copyright 2023. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
