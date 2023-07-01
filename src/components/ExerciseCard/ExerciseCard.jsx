import React from 'react';
import { useRouter } from "next/router";
import Link from 'next/link'
import { FaEdit, FaRegTrashAlt } from "react-icons/fa";
import { SiCodereview } from "react-icons/si";

import { withOpenModal } from '@/hocs/withOpenModal';
import { fetchWrapper } from '@/helpers/fetchWrapper';

import ExerciseForm from '../ExerciseForm';
import { IconButton } from "../Button";
import { Media } from '../Media';

import styles from './ExerciseCard.module.scss';

function ExerciseCard({ openModal, onDelete, ...props }) {
  const { id, name, description,  media } = props;
  const router = useRouter();
  const [mediaItem] = media;

  const handleEdit = () => {
    openModal({
      component: ExerciseForm,
      componentProps: {
        initialData : props,
      },
    });
    
  }

  const handleView = () => {
    router.push(`/exercises/${id}`);
  }

  const handleDelete = async () => {
    await fetchWrapper.delete(`/api/exercise/${id}`);
    onDelete(id);
  }

  return (
    <div className={styles.card}>
      <div className={styles.head}>
        <Link href={`/exercises/${id}`} className={styles.link} />
        <Media className={styles.media} {...mediaItem} playing={false} />
      </div>
      <div className={styles.body}>
        <div className={styles.actions}>
          <IconButton
            className={styles.edit}
            icon={FaEdit}
            tooltip="Editar"
            onClick={handleEdit}
          />
          <IconButton
            className={styles.view}
            icon={SiCodereview}
            tooltip="Ver"
            onClick={handleView}
          />
          <IconButton
            className={styles.delete}
            icon={FaRegTrashAlt}
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

export default withOpenModal(ExerciseCard);