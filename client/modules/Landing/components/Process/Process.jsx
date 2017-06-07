/* eslint-disable max-len, react/no-danger  */

import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'util/classNames';

import LazyInlineSvg from 'components/LazyInlineSvg/LazyInlineSvg';

import styles from './Process.scss';

import diagnose from './diagnose.svg';
import ideate from './ideate.svg';
import propose from './propose.svg';
import implement from './implement.svg';

/**
 * Constants
 */

const TIMELINE_ITEMS = [
  {
    image: diagnose,
    months: 'April - May',
    title: 'Discover Issues',
    description: 'Discover issues and frame the most significant challenges around mobility in San Diego',
  },
  {
    image: ideate,
    months: 'June - July',
    title: 'Ideate Solutions',
    description: 'Generate multiple creative  solutions to address the <br/> key challenges',
  },
  {
    image: propose,
    months: 'August - September',
    title: 'Prototype Concepts',
    description: 'Form teams to build mockups of solutions and get feedback <br /> from stakeholders',
  },
  {
    image: implement,
    months: 'October -',
    title: 'Take Action',
    description: 'Present best solutions to <br/> civic leaders and experts for implementation',
  },
];


/**
 * TimelineText
 */

function TimelineText({ active, title, description, months }) {
  const classes = [styles.timelineText];
  if (!active) {
    classes.push(styles.inactiveText);
  }

  return (
    <div className={classNames(classes)}>
      <div className={styles.months}>{months}</div>
      <div className={styles.title}>{title}</div>
      <div
        className={styles.description}
        dangerouslySetInnerHTML={{
          __html: description,
        }}
      />
    </div>
  );
}

TimelineText.propTypes = {
  active: PropTypes.bool,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  months: PropTypes.string.isRequired,
};

TimelineText.defaultProps = {
  active: true,
};


/**
 * Process
 */

const propTypes = {
  phase: PropTypes.number,
  mini: PropTypes.bool,
};

const contextTypes = {
  router: PropTypes.object,
};

const defaultProps = {
  phase: null,
  mini: false,
};

function Process({ phase, mini }) {
  const circles = TIMELINE_ITEMS.map((item, i) => {
    const containerClasses = [styles.circleContainer];
    if (phase !== null) {
      if (i <= phase) {
        containerClasses.push(styles.active);
      } else {
        containerClasses.push(styles.inactive);
      }
    }

    return (
      <div key={item.title} className={classNames(containerClasses)}>
        <div className={classNames([styles.circle, styles[`circle${i}`]])} />
        <div className={classNames([styles.circleOverlay, styles[`circleOverlay${i}`]])} />
        <LazyInlineSvg wrapperClassName={styles.circleIcon} src={item.image} />
      </div>
    );
  });

  const connectors = Array.apply(0, Array(TIMELINE_ITEMS.length - 1)).map((el, i) => {
    const j = i + 1;
    const key = `${i}${j}`;
    const classes = [styles[`connector${key}`]];

    if (phase !== null) {
      if (i <= (phase - 1)) {
        classes.push(styles.active);
      } else {
        classes.push(styles.inactive);
      }
    }

    return (
      <div key={key} className={classNames(classes)} />
    );
  });

  let timelineText = null;
  const processClass = [styles.process];
  if (!mini) {
    const timelineItems = TIMELINE_ITEMS.map((item, i) => {
      let isActive = true;
      if (phase !== null) {
        isActive = phase === i;
      }

      return (
        <TimelineText
          key={item.title}
          active={isActive}
          {...item}
        />
      );
    });
    timelineText = <div className={styles.timelineTextContainer}>{timelineItems}</div>;
  } else {
    processClass.push(styles.mini);
  }

  return (
    <section className={classNames(processClass)}>
      <div className={styles.timeline}>
        <div className={styles.chart}>
          <div className={styles.circlesContainer}>{circles}</div>
          {connectors}
        </div>
        {timelineText}
      </div>
    </section>
  );
}

Process.propTypes = propTypes;
Process.contextTypes = contextTypes;
Process.defaultProps = defaultProps;

export default Process;
