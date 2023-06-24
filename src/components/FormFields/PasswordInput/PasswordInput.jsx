'use client'

import React, { useEffect, useRef, useState } from 'react';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import styles from './styles.module.scss';

const PasswordInput = ({ register, name, validations, ...rest }) => {
  const [showPassword, setShowPassword] = useState(false);
  const inputRef = useRef();

  useEffect(() => {
    register(inputRef.current, validations);
  }, [register, validations]);

  const togglePasswordVisibility = () => setShowPassword(prev => !prev);

  return (
    <div className={styles.inputField}>
      <input
        ref={inputRef}
        {...rest}
        type={showPassword ? 'text' : 'password'}
        name={name}
        className={styles.input}
      />
      <button type="button" onClick={togglePasswordVisibility} className={styles.eyeIcon}>
        {showPassword ? <FaEyeSlash /> : <FaEye />}
      </button>
    </div>
  );
};

export default PasswordInput;
