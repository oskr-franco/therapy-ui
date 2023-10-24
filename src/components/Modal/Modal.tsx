/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import cx from 'classnames';
import { FaRegTimesCircle } from 'react-icons/fa';
import { IconButton } from '../Button';

import styles from './Modal.module.scss';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
};

function Modal({ isOpen, onClose, children, className }: ModalProps) {
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
          color="red"
        />
        {children}
      </div>
    </div>
  );
}

export default Modal;
