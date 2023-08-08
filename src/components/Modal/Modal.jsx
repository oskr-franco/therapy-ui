import React from 'react';
import cx from 'classnames';
import { FaRegTimesCircle } from 'react-icons/fa';
import { IconButton } from '../Button';

import styles from './Modal.module.scss';

function Modal({ isOpen, onClose, children, className }) {
  function onClickModalHandler(e) {
    e.stopPropagation();
  }

  return (
    <div
      className={cx(styles.container, { [styles.open]: isOpen }, className)}
      onClick={onClose}
    >
      <div
        className={cx(styles.modal, { [styles.open]: isOpen })}
        onClick={onClickModalHandler}
      >
        <IconButton
          icon={FaRegTimesCircle}
          onClick={onClose}
          className={styles.closeBtn}
        />
        {children}
      </div>
    </div>
  );
}

export default Modal;
