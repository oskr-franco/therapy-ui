'use client';

import React, { InputHTMLAttributes, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { FieldValues, RegisterOptions, UseFormRegister } from 'react-hook-form';

import styles from './PasswordInput.module.scss';
import { IconButton } from '@/components/Button';

type PasswordInputProps = InputHTMLAttributes<HTMLInputElement> & {
  register: UseFormRegister<FieldValues>;
  name: string;
  validations?: RegisterOptions;
};

function PasswordInput({
  register,
  name,
  validations,
  ...rest
}: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

  return (
    <div className={styles.inputField}>
      <input
        {...register(name, validations)}
        type={showPassword ? 'text' : 'password'}
        name={name}
        className={styles.input}
        {...rest}
      />
      <IconButton
        iconSize={15}
        color="grey"
        icon={showPassword ? FaEyeSlash : FaEye}
        tooltip={showPassword ? 'Hide password' : 'Show password'}
        onClick={togglePasswordVisibility}
      />
    </div>
  );
}

export default PasswordInput;
