import React from 'react';
import cx from "classnames";

import styles from './DotsLoading.module.scss';

const DotsLoading = ({ className }) => {
  return (
    <div className={cx(styles.spinner, className)}>
      <div className={styles.bounce1}></div>
      <div className={styles.bounce2}></div>
      <div className={styles.bounce3}></div>
    </div>
  );
};

export default DotsLoading;