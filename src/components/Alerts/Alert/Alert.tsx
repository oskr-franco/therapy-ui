import React from 'react';

import { AlertType, MessageType } from './types';
import styles from './Alert.module.scss';

type AlertProps = AlertType & {
  removeAlert: (id: number) => void;
};

function Alert({
  id,
  message,
  type = MessageType.Info,
  removeAlert,
}: AlertProps) {
  const typeStyle = styles[type];
  const handleRemove = () => {
    removeAlert(id);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.keyCode === 13 || event.keyCode === 32) {
      // 13 is 'Enter' and 32 is 'Space'
      handleRemove();
    }
  };

  return (
    <div
      className={`${styles.alert} ${typeStyle}`}
      onClick={handleRemove}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
    >
      {message}
    </div>
  );
}

export default React.memo(Alert);
