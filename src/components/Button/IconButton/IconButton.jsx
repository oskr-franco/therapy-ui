import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import styles from './IconButton.module.scss';

function IconButton({
  className,
  icon: Icon,
  tooltip,
  tooltipPosition,
  onClick,
}) {
  return (
    <button
      type="button"
      className={cx(styles.button, className)}
      onClick={onClick}
    >
      <Icon />
      {tooltip && (
        <div className={cx(styles.tooltip, styles[tooltipPosition])}>
          {tooltip}
        </div>
      )}
    </button>
  );
}

IconButton.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.elementType.isRequired,
  tooltip: PropTypes.string,
  tooltipPosition: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
};

IconButton.defaultProps = {
  tooltipPosition: 'top',
  className: '',
  tooltip: undefined,
};

export default React.memo(IconButton);
