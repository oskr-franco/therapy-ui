import { IconType } from 'react-icons';
import cx from 'classnames';

import styles from './Item.module.scss';
import { IconButton } from '@/components/Button';

type ItemProps = {
  className?: string;
  icon: IconType;
  href: string;
  children?: React.ReactNode;
};
function Item({ icon: Icon, href, className, children }: ItemProps) {
  return (
    <div className={cx(styles.container, className)}>
      <IconButton href={href} icon={Icon} className={styles.icon} iconSize={25}>
        {children}
      </IconButton>
    </div>
  );
}

export default Item;
