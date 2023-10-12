'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { BsBoxArrowUpRight, BsPencilSquare, BsTrash } from 'react-icons/bs';

import fetchWrapper from '@/helpers/fetchWrapper';

import ExerciseForm from '@/components/Exercise/ExerciseForm';
import { IconButton } from '@/components/Button';
import withAlerts from '@/hocs/withAlerts';

import styles from './CardActions.module.scss';
import withOpenModal from '@/hocs/withOpenModal';

function CardActions({
  id,
  name,
  description,
  media,
  instructions,
  openModal,
  alert,
}) {
  const router = useRouter();

  const handleEdit = () => {
    openModal({
      component: ExerciseForm,
      componentProps: {
        initialData: { id, name, description, media, instructions },
      },
    });
  };

  const handleDelete = async () => {
    await fetchWrapper.delete(`/api/exercise/${id}`);
    router.refresh();
    alert.success('Ejercicio eliminado');
  };
  return (
    <div className={styles.actions}>
      <IconButton
        className={styles.edit}
        icon={BsPencilSquare}
        tooltip="Editar"
        onClick={handleEdit}
      />
      <Link href={`/exercises/${id}`}>
        <IconButton
          className={styles.view}
          icon={BsBoxArrowUpRight}
          tooltip="Ver"
        />
      </Link>
      <IconButton
        className={styles.delete}
        icon={BsTrash}
        tooltip="Eliminar"
        onClick={handleDelete}
      />
    </div>
  );
}

export default withAlerts(withOpenModal(CardActions));
