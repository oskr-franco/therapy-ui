import React from 'react';

import styles from './Alert.module.scss';

function Alert({ id, message, type = 'info', removeAlert }) {
  const typeStyle = styles[type];
  const handleRemove = () => {
    removeAlert(id);
  };

  const handleKeyDown = (event) => {
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

// Alert.propTypes = {
//   id: PropTypes.number.isRequired,
//   message: PropTypes.string.isRequired,
//   type: PropTypes.oneOf(['info', 'success', 'warning', 'error']).isRequired,
//   removeAlert: PropTypes.func.isRequired,
// };

export default React.memo(Alert);
