import React from 'react';

import styles from './Error.module.scss';

type ErrorProps = {
  error?: string;
};

function Error({ error }: ErrorProps) {
  return <span className={styles.error}>{error}</span>;
}

export default Error;
