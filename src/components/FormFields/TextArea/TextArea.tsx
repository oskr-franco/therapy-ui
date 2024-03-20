'use client';

import React from 'react';
import styles from './TextArea.module.scss';
import { FieldValues, RegisterOptions, UseFormRegister } from 'react-hook-form';

type TextAreaProps = {
  register: UseFormRegister<FieldValues>;
  name: string;
  validations?: RegisterOptions;
  icon: React.ElementType;
  placeholder?: string;
};

function TextArea({
  register,
  name,
  validations,
  icon: Icon,
  ...rest
}: TextAreaProps) {
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
