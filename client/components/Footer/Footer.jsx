/* eslint-disable max-len */

import React from 'react';
import PropTypes from 'prop-types';

import styles from './Footer.scss';

import designLabLogo from './design-lab-logo.png';
import designForwardLogo from './design-forward-logo.png';
import protolabLogo from './protolab-logo.png';

/**
 * Constants
 */

const START_YEAR = 2017;


/**
 * Footer
 */

const propTypes = {};

const contextTypes = {
  router: PropTypes.object,
};

const defaultProps = {};

function Footer() {
  const currentYear = (new Date()).getFullYear();
  const copyrightYear = START_YEAR === currentYear ? currentYear : `${START_YEAR}-${currentYear}`;

  return (
    <footer className={styles.footer}>
      <div className={styles.name}>D4SD</div>
      <div className={styles.navigate}>
        <h4>Navigate</h4>
      </div>
      <div className={styles.affiliates}>
        <h4>Affiliates</h4>
        <nav>
          <a href="http://designlab.ucsd.edu/" target="_blank" rel="noopener noreferrer">
            <img src={designLabLogo} alt="UC San Diego Design Lab" />
          </a>
          <a href="https://designforwardsd.com/" target="_blank" rel="noopener noreferrer">
            <img src={designForwardLogo} alt="Design Forward Alliance" />
          </a>
          <a href="http://protolab.ucsd.edu/" target="_blank" rel="noopener noreferrer">
            <img src={protolabLogo} alt="Protolab" />
          </a>
        </nav>
      </div>
      <div className={styles.copyright}>Copyright &copy; {copyrightYear} Design 4 San Diego. All Rights Reserved. This website is under construction and is subject to change.</div>
    </footer>
  );
}

Footer.propTypes = propTypes;
Footer.contextTypes = contextTypes;
Footer.defaultProps = defaultProps;

export default Footer;
