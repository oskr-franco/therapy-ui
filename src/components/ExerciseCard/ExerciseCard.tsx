'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { BsBoxArrowUpRight, BsPencilSquare, BsTrash } from 'react-icons/bs';

import withAlerts from '@/hocs/withAlerts';
import withOpenModal from '@/hocs/withOpenModal';
import fetchWrapper from '@/helpers/fetchWrapper';

import ExerciseForm from '../ExerciseForm';
import { IconButton } from '../Button';
import Media from '../Media';

import styles from './ExerciseCard.module.scss';

function ExerciseCard({
  id,
  name,
  description,
  media,
  instructions,
  openModal,
  alert,
}) {
  const router = useRouter();
  const [mediaItem] = media;

  const handleEdit = () => {
    openModal({
      component: ExerciseForm,
      componentProps: {
        initialData: { id, name, description, media, instructions },
      },
    });
  };

  const handleView = () => {
    router.push(`/exercises/${id}`);
  };

  const handleDelete = async () => {
    await fetchWrapper.delete(`/api/exercise/${id}`);
    router.refresh();
    alert.success('Ejercicio eliminado');
  };

  return (
    <div className={styles.card}>
      <div className={styles.head}>
        <Link href={`/exercises/${id}`} className={styles.link} />
        <Media
          className={styles.media}
          id={mediaItem.id}
          url={mediaItem.url}
          type={mediaItem.type}
        />
      </div>
      <div className={styles.body}>
        <div className={styles.actions}>
          <IconButton
            className={styles.edit}
            icon={BsPencilSquare}
            tooltip="Editar"
            onClick={handleEdit}
          />
          <IconButton
            className={styles.view}
            icon={BsBoxArrowUpRight}
            tooltip="Ver"
            onClick={handleView}
          />
          <IconButton
            className={styles.delete}
            icon={BsTrash}
            tooltip="Eliminar"
            onClick={handleDelete}
          />
        </div>
        <h3>{name}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
}

export default withAlerts(withOpenModal(ExerciseCard));
