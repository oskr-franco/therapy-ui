import React from 'react';
import PropTypes from 'prop-types';

import styles from './Alert.module.scss';

function Alert({ id, message, type, removeAlert }) {
  const handleRemove = () => {
    removeAlert(id);
  };

  return (
    <div className={`${styles.alert} ${styles[type]}`} onClick={handleRemove}>
      {message}
    </div>
  );
}

Alert.propTypes = {
  id: PropTypes.number.isRequired,
  message: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['info', 'success', 'warning', 'error']).isRequired,
  removeAlert: PropTypes.func.isRequired,
};

export default React.memo(Alert);
