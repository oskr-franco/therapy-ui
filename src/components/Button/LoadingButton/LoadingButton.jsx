import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import DotsLoading from '@/components/Loading';

import styles from './LoadingButton.module.scss';

function LoadingButton({ children, className, isLoading, type }) {
  return (
    <button
      // eslint-disable-next-line react/button-has-type
      type={type}
      className={cx(styles.button, { [styles.loading]: isLoading }, className)}
      disabled={isLoading}
    >
      {isLoading ? <DotsLoading className={styles.dotsLoading} /> : children}
    </button>
  );
}

LoadingButton.propTypes = {
  children: PropTypes.node.isRequired,
  isLoading: PropTypes.bool,
  className: PropTypes.string,
  type: PropTypes.arrayOf(['submit', 'button', 'reset']),
};

LoadingButton.defaultProps = {
  isLoading: false,
  className: '',
  type: 'button',
};

export default LoadingButton;
