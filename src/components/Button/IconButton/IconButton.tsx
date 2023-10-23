'use client';
import React, { useState } from 'react';
import cx from 'classnames';

import Tooltip from '@/components/Tooltip';

import styles from './IconButton.module.scss';

type IconButtonProps = {
  alt?: string;
  id?: string;
  className?: string;
  icon: React.ElementType;
  tooltip?: string;
  tooltipPosition?: 'top' | 'bottom' | 'left' | 'right';
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

function IconButton({
  id,
  className,
  icon: Icon,
  tooltip,
  tooltipPosition = 'top',
  onClick,
}: IconButtonProps) {
  return (
    <button
      id={id}
      type="button"
      className={cx(styles.button, className)}
      onClick={onClick}
    >
      <Icon />
      <Tooltip
        className={styles.tooltip}
        tooltip={tooltip}
        tooltipPosition={tooltipPosition}
        showTooltip
      />
    </button>
  );
}

export default React.memo(IconButton);
