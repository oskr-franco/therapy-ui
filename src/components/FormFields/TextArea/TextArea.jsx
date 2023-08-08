'use client';

import React from 'react';
import styles from './TextArea.module.scss';

function TextArea({ register, name, validations, icon: Icon, ...rest }) {
  return (
    <div className={styles.inputField}>
      {Icon && <Icon />}
      <textarea
        {...register(name, validations)}
        className={styles.input}
        {...rest}
      />
    </div>
  );
}

export default TextArea;
