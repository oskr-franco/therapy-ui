import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import DotsLoading from '@/components/Loading';

import styles from './LoadingButton.module.scss';

function LoadingButton({ children, className, isLoading, ...props }) {
  return (
    <button
      className={cx(styles.button, { [styles.loading]: isLoading }, className)}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? <DotsLoading className={styles.dotsLoading} /> : children}
    </button>
  );
}

LoadingButton.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  isLoading: PropTypes.bool,
};

export default LoadingButton;
