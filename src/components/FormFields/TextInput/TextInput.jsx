'use client';

/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import PropTypes from 'prop-types';

import styles from './TextInput.module.scss';

function TextInput({
  register,
  name,
  validations,
  icon: Icon,
  placeholder,
  defaultValue,
  ...rest
}) {
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

TextInput.propTypes = {
  register: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  icon: PropTypes.elementType,
  validations: PropTypes.object,
  placeholder: PropTypes.string,
};

TextInput.defaultProps = {
  icon: null,
  placeholder: '',
  validations: null,
};

export default TextInput;
