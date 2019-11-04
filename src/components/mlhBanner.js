import React from 'react';
import styles from './mlhBanner.module.css';

export default () => (
  <a id={styles.container} href="https://mlh.io/seasons/na-2020/events?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2020-season&utm_content=white" target="_blank" rel="noopener noreferrer">
    <img id={styles.banner} src="https://s3.amazonaws.com/logged-assets/trust-badge/2020/mlh-trust-badge-2020-white.svg" alt="Major League Hacking 2020 Hackathon Season" />
  </a>
);
