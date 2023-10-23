import React from 'react';
import cx from 'classnames';

interface ITooltipProps {
  className?: string;
  tooltip?: string;
  tooltipPosition?: 'top' | 'bottom' | 'left' | 'right';
  showTooltip?: boolean;
}

import styles from './Tooltip.module.scss';

function Tooltip({
  className,
  tooltip,
  tooltipPosition,
  showTooltip,
}: ITooltipProps) {
  if (!tooltip || !showTooltip) {
    return null;
  }

  return (
    <div className={cx(className, styles.tooltip, styles[tooltipPosition])}>
      {tooltip}
    </div>
  );
}

export default Tooltip;
