'use client';

import React, { useEffect, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { FieldValues, RegisterOptions, UseFormRegister } from 'react-hook-form';

import styles from './PasswordInput.module.scss';

type PasswordInputProps = {
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

  useEffect(() => {
    register(name, validations);
  }, [name, register, validations]);

  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

  return (
    <div className={styles.inputField}>
      <input
        {...rest}
        type={showPassword ? 'text' : 'password'}
        name={name}
        className={styles.input}
      />
      <button
        type="button"
        onClick={togglePasswordVisibility}
        className={styles.eyeIcon}
      >
        {showPassword ? <FaEyeSlash /> : <FaEye />}
      </button>
    </div>
  );
}

export default PasswordInput;
