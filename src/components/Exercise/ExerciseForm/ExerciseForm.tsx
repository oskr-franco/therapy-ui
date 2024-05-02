'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { CgGym } from 'react-icons/cg';
import { TbFileDescription } from 'react-icons/tb';
import { FaListUl, FaLink, FaPlusCircle, FaMinusCircle } from 'react-icons/fa';

import { updateExercise, createExercise } from '@/actions/exercises/actions';
import getUrlType from '@/utils/getUrlType';
import withAlerts from '@/hocs/withAlerts';
import withOpenModal from '@/hocs/withOpenModal';

import { TextInput, TextArea, Error } from '../../FormFields';
import { LoadingButton, IconButton } from '../../Button';

import ExerciseFormProps from './ExerciseForm.types';

import styles from './ExerciseForm.module.scss';
import { Exercise } from '@/types';

function ExerciseForm({
  initialData = {},
  alert,
  closeModal,
}: ExerciseFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const isEditing = !!initialData.id;
  const titleText = 'Agregar Ejercicio';
  const namePlaceholder = 'Nombre';
  const nameRequiredError = 'Nombre es requerido';
  const nameMaxLengthError = 'El nombre no puede exceder los 200 caracteres';
  const descriptionPlaceholder = 'Descripción';
  const descriptionRequiredError = 'Descripción es requerido';
  const descriptionMaxLengthError =
    'La descripción no puede exceder los 2000 caracteres';
  const instructionsPlaceholder = 'Instrucciones';
  const instructionsMaxLengthError =
    'Las instrucciones no pueden exceder los 8000 caracteres';
  const mediaTitle = 'Imagenes y/o Videos';
  const urlPlaceholder = 'Agegar Url';
  const urlRequiredError = 'Se requiere al menos una Imagen o Video';
  const urlValidTypeError = 'La URL debe ser una imagen o un video.';
  const createText = 'Crear';
  const updateText = 'Actualizar';
  const submitText = isEditing ? updateText : createText;
  const exerciseUpdated = 'Ejercicio actualizado';
  const exerciseCreated = 'Ejercicio creado';
  const addAlt = 'Agregar';

  const {
    register,
    handleSubmit,
    control,
    setValue,
    watch,
    formState: { errors },
  } = useForm<Partial<Exercise>>({
    defaultValues: {
      name: '',
      description: '',
      instructions: '',
      media: [{ type: '', url: '' }],
      ...initialData,
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'media',
  });

  // Set initial data for media items when editing an existing exercise
  useEffect(() => {
    if (initialData.media) {
      initialData.media.forEach((item, index) => {
        // append({ id: item.id, type: item.type, url: item.url });
        setValue(`media.${index}.id`, item.id);
        setValue(`media.${index}.type`, item.type);
        setValue(`media.${index}.url`, item.url);
      });
    }
  }, [initialData.media, append, setValue]);

  // Set media item type based on URL
  const mediaUrls = fields.map((_, index) => watch(`media.${index}.url`));
  useEffect(() => {
    mediaUrls.forEach((url, index) => {
      const type = getUrlType(url);
      setValue(`media.${index}.type`, type);
    });
  }, [mediaUrls, setValue]);

  const onSubmit = async (data: Partial<Exercise>) => {
    setIsLoading(true);
    const exercise = data as Exercise;
    if (data.id) {
      // We have an ID, so we're updating an existing item
      // await fetchWrapper.put(`/api/exercise/${data.id}`, data);
      updateExercise(exercise);
      closeModal();
      alert.success(exerciseUpdated);
    } else {
      // No ID, so we're creating a new item;
      createExercise(exercise);
      closeModal();
      alert.success(exerciseCreated);
    }

    setIsLoading(false);
  };

  const onAddMediaItem = useCallback(() => {
    append({ id: -1, type: '', url: '' });
  }, [append]);

  const onRemoveMediaItem = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      const [id] = e.currentTarget.id.split('-').slice(-1);
      remove(Number(id));
    },
    [remove],
  );

  const printMediaButton = useCallback(
    (index: number) => {
      if (index === 0) {
        if (fields.length > 3) return null;
        return (
          <IconButton
            key={index}
            onClick={onAddMediaItem}
            icon={FaPlusCircle}
            alt={addAlt}
            color="green"
          />
        );
      }
      return (
        <IconButton
          key={index}
          id={`media-${index}`}
          onClick={onRemoveMediaItem}
          icon={FaMinusCircle}
          color="red"
        />
      );
    },
    [fields, onAddMediaItem, onRemoveMediaItem],
  );

  return (
    <>
      <h3 className={styles.title}>{titleText}</h3>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <TextInput
          register={register}
          name="name"
          icon={CgGym}
          validations={{
            required: nameRequiredError,
            maxLength: {
              value: 200,
              message: nameMaxLengthError,
            },
          }}
          placeholder={namePlaceholder}
        />
        <Error error={errors.name?.message} />

        <TextArea
          register={register}
          name="description"
          icon={TbFileDescription}
          validations={{
            required: descriptionRequiredError,
            maxLength: {
              value: 2000,
              message: descriptionMaxLengthError,
            },
          }}
          placeholder={descriptionPlaceholder}
        />
        <Error error={errors.description?.message} />

        <TextArea
          register={register}
          name="instructions"
          icon={FaListUl}
          validations={{
            maxLength: {
              value: 8000,
              message: instructionsMaxLengthError,
            },
          }}
          placeholder={instructionsPlaceholder}
        />
        <Error error={errors.instructions?.message} />

        <div className={styles.mediaList}>
          <h4>{mediaTitle}</h4>
          {fields.map((field, index) => (
            <div key={field.id} className={styles.mediaItem}>
              <div className={styles.mediaInput}>
                <input
                  {...register(`media.${index}.id`)}
                  defaultValue={field.id}
                  hidden
                />

                <TextInput
                  register={register}
                  name={`media.${index}.url`}
                  icon={FaLink}
                  validations={{
                    required: index === 0 ? urlRequiredError : undefined,
                    validate: {
                      validType: async (value: string) => {
                        const type = getUrlType(value);
                        return type !== null || urlValidTypeError;
                      },
                    },
                  }}
                  placeholder={urlPlaceholder}
                  defaultValue={field.url}
                />

                <input
                  {...register(`media.${index}.type`)}
                  defaultValue={field.type}
                  disabled
                  hidden
                />
              </div>
              <div className={styles.mediaBtnContainer}>
                {printMediaButton(index)}
              </div>
              <Error error={errors.media?.[index]?.url?.message} />
            </div>
          ))}
        </div>
        <LoadingButton
          isLoading={isLoading}
          className={styles.submitBtn}
          type="submit"
        >
          {submitText}
        </LoadingButton>
      </form>
    </>
  );
}

export default withAlerts(withOpenModal(ExerciseForm));
