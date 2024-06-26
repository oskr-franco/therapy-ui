'use client';

import React, { ElementType, InputHTMLAttributes } from 'react';
import { FieldValues, RegisterOptions, UseFormRegister } from 'react-hook-form';

import styles from './TextInput.module.scss';

type TextInputProps = InputHTMLAttributes<HTMLInputElement> & {
  register: UseFormRegister<FieldValues>;
  name: string;
  icon?: ElementType;
  validations?: RegisterOptions;
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
