import React from 'react';
import ImageFallback from '../ImageFallback';
import { FaEdit } from "react-icons/fa";
import { SiCodereview } from "react-icons/si";
import { IconButton } from "../Button";

import styles from './ExerciseCard.module.scss';

function ExerciseCard({ name, description, media }) {
  const mediaItem = media.find((media) => media.type==="Image")
  const { url } = mediaItem || {};
  return (
    <div className={styles.card}>
      <div className={styles.head}>
        <ImageFallback
          className={styles.media}
          width={50}
          height={50}
          src={url}
          layout="responsive"
        />
      </div>
      <div className={styles.body}>
        <div className={styles.actions}>
          <IconButton className={styles.edit} icon={FaEdit} tooltip="Editar" />
          <IconButton className={styles.view} icon={SiCodereview} tooltip="Ver"/>
        </div>
        <h3>{name}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
}

export default ExerciseCard;