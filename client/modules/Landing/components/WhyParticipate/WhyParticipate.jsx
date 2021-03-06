/* eslint-disable max-len */

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { withCollectRef } from 'util/RefCollector';

import globalStyles from 'main.scss';
import styles from './WhyParticipate.scss';

import learnAndPractice from './learn-and-practice.png';
import fame from './fame.png';
import winPrizes from './win-prizes.png';

/**
 * Get Involved
 */

const sectionTitle = 'Why Participate?';

const propTypes = {
  componentRef: PropTypes.func.isRequired,
};

const contextTypes = {
  router: PropTypes.object,
};

const defaultProps = {};

function WhyParticipate(props) {
  return (
    <section id={styles.participate} ref={props.componentRef}>
      <div className={globalStyles.contentWrapper}>
        <h1>{sectionTitle}</h1>
        <div className={styles.contentContainer}>
          <div className={styles.participateIconsWrapper}>
            <div className={styles.contentElement}>
              <div className={styles.imgCont}>
                <div className={styles.contentImg}>
                  <img src={learnAndPractice} alt="Learn and Practice Icon" />
                </div>
              </div>
              <div className={styles.contentText}>
                <h2 className={globalStyles.red}>Learn Design</h2>
                <p>
                  The D4SD <Link to="/challenges">Civic Design Challenge on Mobility</Link> provides a great opportunity to practice design on real-world problems and to get mentorship from domain experts.
                </p>
              </div>
            </div>
            <div className={styles.contentElement}>
              <div className={styles.imgCont}>
                <div className={styles.contentImg}>
                  <img src={fame} alt="15 Minutes Icon" />
                </div>
              </div>
              <div className={styles.contentText}>
                <h2 className={globalStyles.red}>Showcase Your Ideas</h2>
                <p>We will showcase qualifying submissions on our website and finalists at the <a href="http://www.designforwardsd.com/the-summit/" rel="noopener noreferrer" target="_blank">Design Forward Alliance Summit on Oct 26</a>.</p>
              </div>
            </div>
            <div className={styles.contentElement}>
              <div className={styles.imgCont}>
                <div className={styles.contentImg}>
                  <img src={winPrizes} alt="Win Prizes Icon" />
                </div>
              </div>
              <div className={styles.contentText}>
                <h2 className={globalStyles.red}>Win Prizes</h2>
                <p>Entries judged to have the most potential will be awarded in cash prizes and exclusive networking opportunities.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

WhyParticipate.propTypes = propTypes;
WhyParticipate.contextTypes = contextTypes;
WhyParticipate.defaultProps = defaultProps;

export default withCollectRef('WhyParticipate')(WhyParticipate);
