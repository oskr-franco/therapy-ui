import React from 'react';
import Link from 'next/link';
import { FaPlusCircle } from 'react-icons/fa';
import cx from 'classnames';

import CreateCardType from './CreateCardLink.types';
import styles from '../CreateCard.module.scss';

function CreateCardLink({ className, text, href }: CreateCardType) {
  return (
    <Link href={href}>
      <div className={cx(className, styles.container)}>
        <span className={styles.text}>{text}</span>
        <FaPlusCircle size={40} className={styles.icon} />
      </div>
    </Link>
  );
}

export default CreateCardLink;
