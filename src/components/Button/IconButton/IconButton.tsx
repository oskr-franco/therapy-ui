import React from 'react';
import cx from 'classnames';
import Link from 'next/link';

import Tooltip from '@/components/Tooltip';

import styles from './IconButton.module.scss';

type IconButtonProps = {
  alt?: string;
  children?: React.ReactNode;
  className?: string;
  color?: 'red' | 'black' | 'green' | 'grey';
  href?: string;
  icon: React.ElementType;
  iconSize?: number;
  id?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  tooltip?: string;
  tooltipPosition?: 'top' | 'bottom' | 'left' | 'right';
  disabled?: boolean;
};

function IconButton({
  children,
  className,
  color = 'black',
  href,
  icon: Icon,
  iconSize = 20,
  id,
  onClick,
  tooltip,
  tooltipPosition = 'top',
  disabled,
}: IconButtonProps) {
  const IconTooltip = (
    <>
      <div className={styles.iconContainer}>
        <Icon size={iconSize} />
      </div>
      <Tooltip
        className={styles.tooltip}
        tooltip={tooltip}
        tooltipPosition={tooltipPosition}
        showTooltip
      />
    </>
  );
  if (href) {
    return (
      <Link
        href={href}
        id={id}
        className={cx(styles.button, styles[color], className)}
      >
        {IconTooltip}
        {children}
      </Link>
    );
  }
  return (
    <button
      id={id}
      type="button"
      className={cx(styles.button, styles[color], className)}
      onClick={onClick}
      disabled={disabled}
    >
      {IconTooltip}
      {children}
    </button>
  );
}

export default React.memo(IconButton);
