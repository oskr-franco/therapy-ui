import React from 'react';
import cx from 'classnames';
import styles from './Skeleton.module.scss';

type SkeletonProps = {
  className?: string;
};

function SkeletonLoader({ className }: SkeletonProps) {
  return <div className={cx(styles.skeleton, className)} />;
}

export default SkeletonLoader;
