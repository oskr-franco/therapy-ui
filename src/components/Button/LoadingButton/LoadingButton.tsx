import React from 'react';
import cx from 'classnames';

import DotsLoading from '@/components/Loading';

import styles from './LoadingButton.module.scss';

type LoadingButtonProps = {
  children: React.ReactNode;
  className?: string;
  color?: 'blue' | 'red';
  isLoading?: boolean;
  onClick?: () => void;
  type?: 'submit' | 'button' | 'reset';
};

function LoadingButton({
  children,
  className,
  color = 'blue',
  isLoading,
  onClick,
  type = 'button',
}: LoadingButtonProps) {
  return (
    <button
      type={type}
      className={cx(
        styles.button,
        styles[color],
        { [styles.loading]: isLoading },
        className,
      )}
      disabled={isLoading}
      onClick={onClick}
    >
      {isLoading ? <DotsLoading className={styles.dotsLoading} /> : children}
    </button>
  );
}

export default LoadingButton;
