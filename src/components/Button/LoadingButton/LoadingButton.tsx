import React from 'react';
import cx from 'classnames';

import DotsLoading from '@/components/Loading';

import styles from './LoadingButton.module.scss';

type LoadingButtonProps = {
  children: React.ReactNode;
  className?: string;
  isLoading?: boolean;
  type?: 'submit' | 'button' | 'reset';
};

function LoadingButton({
  children,
  className,
  isLoading,
  type = 'button',
}: LoadingButtonProps) {
  return (
    <button
      type={type}
      className={cx(styles.button, { [styles.loading]: isLoading }, className)}
      disabled={isLoading}
    >
      {isLoading ? <DotsLoading className={styles.dotsLoading} /> : children}
    </button>
  );
}

export default LoadingButton;
