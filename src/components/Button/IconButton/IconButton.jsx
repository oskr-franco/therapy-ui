import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";

import styles from "./IconButton.module.scss";

function IconButton({ className, icon: Icon, ...props }) {
  return (
    <button className={cx(styles.button, className)} {...props}>
      <Icon />
    </button>
  );
}

IconButton.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.elementType.isRequired,
};

export default React.memo(IconButton);