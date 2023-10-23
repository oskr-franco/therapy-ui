import Link from 'next/link';
import { IconType } from 'react-icons';
import cx from 'classnames';

import styles from './Item.module.scss';

type ItemProps = {
  className?: string;
  icon: IconType;
  href: string;
  text: string;
};
function Item({ icon: Icon, href, text, className }: ItemProps) {
  return (
    <Link href={href} className={cx(styles.container, className)}>
      <Icon className={styles.icon} size={30} />
      <div data-textcontainer className={styles.textContainer}>
        <span className={styles.text}>{text}</span>
      </div>
    </Link>
  );
}

export default Item;
