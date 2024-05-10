/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import cx from 'classnames';
import { FaRegTimesCircle } from 'react-icons/fa';
import { IconButton } from '../Button';
import { LoadingButton as Button } from '@/components/Button';

import styles from './Modal.module.scss';

type ModalProps = {
  isOpen: boolean;
  children: React.ReactNode;
  className?: string;
  onClose: () => void;
  onAccept?: () => void;
};

function Modal({ isOpen, onClose, children, className, onAccept }: ModalProps) {
  const acceptText = 'Aceptar';
  const cancelText = 'Cancelar';
  function onClickModalHandler(e: React.MouseEvent<HTMLDivElement>) {
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

        {onAccept && (
          <div className={styles.actions}>
            <Button onClick={onAccept}>{acceptText}</Button>
            <Button onClick={onClose} color="red">
              {cancelText}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Modal;
