import React from 'react';
import cx from 'classnames';

import styles from './DotsLoading.module.scss';

type DotsLoadingProps = {
  className?: string;
};

function DotsLoading({ className }: DotsLoadingProps) {
  return (
    <div className={cx(styles.spinner, className)}>
      <div className={styles.bounce1} />
      <div className={styles.bounce2} />
      <div className={styles.bounce3} />
    </div>
  );
}

export default DotsLoading;
