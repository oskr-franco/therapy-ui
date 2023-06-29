import React from 'react';
import { useRouter } from "next/router";
import { FaEdit } from "react-icons/fa";
import { SiCodereview } from "react-icons/si";

import { withOpenModal } from '@/hocs/withOpenModal';

import ExerciseForm from '../ExerciseForm';
import { IconButton } from "../Button";
import { Media } from '../Media';

import styles from './ExerciseCard.module.scss';

function ExerciseCard({ openModal, ...props }) {
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

  const handleView = (e) => {
    e.stopPropagation();
    router.push(`/exercises/${id}`);
  }

  return (
    <div className={styles.card}>
      <div className={styles.head} onClick={handleView}>
        <Media className={styles.media} {...mediaItem} />
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
        </div>
        <h3>{name}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
}

export default withOpenModal(ExerciseCard);