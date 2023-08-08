/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable react/button-has-type */
import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import styles from './IconButton.module.scss';

function IconButton({
  className,
  icon: Icon,
  tooltip,
  tooltipPosition,
  ...props
}) {
  return (
    <button role="button" className={cx(styles.button, className)} {...props}>
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
