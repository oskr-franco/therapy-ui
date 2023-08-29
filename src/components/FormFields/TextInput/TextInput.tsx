'use client';

import React from 'react';

import styles from './TextInput.module.scss';

type TextInputProps = {
  register: any;
  name: string;
  icon?: React.ElementType;
  validations?: any;
  placeholder?: string;
  defaultValue?: string;
};

function TextInput({
  register,
  name,
  validations,
  icon: Icon,
  placeholder,
  defaultValue,
  ...rest
}: TextInputProps) {
  return (
    <div className={styles.inputField}>
      {Icon && <Icon />}
      <input
        {...register(name, validations)}
        className={styles.input}
        placeholder={placeholder}
        defaultValue={defaultValue}
        {...rest}
      />
    </div>
  );
}

export default TextInput;
