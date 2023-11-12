'use client';
import React from 'react';
import Link from 'next/link';
import { BsBoxArrowUpRight, BsPencilSquare, BsTrash } from 'react-icons/bs';
import cx from 'classnames';

import { IconButton } from '@/components/Button';

import CardActionsProps from './CardActions.types';
import styles from './CardActions.module.scss';

function CardActions({
  className,
  to,
  handleEdit,
  handleDelete,
}: CardActionsProps) {
  const editText = 'Editar';
  const viewText = 'Ver';
  const deleteText = 'Eliminar';
  return (
    <div className={cx(className, styles.actions)}>
      <IconButton
        className={styles.edit}
        icon={BsPencilSquare}
        tooltip={editText}
        onClick={handleEdit}
      />
      <Link href={to}>
        <IconButton
          className={styles.view}
          icon={BsBoxArrowUpRight}
          tooltip={viewText}
        />
      </Link>
      <IconButton
        className={styles.delete}
        icon={BsTrash}
        tooltip={deleteText}
        onClick={handleDelete}
      />
    </div>
  );
}

export default CardActions;
