import React, { useState, useEffect, useCallback, useMemo } from "react";
import { useForm, useFieldArray } from 'react-hook-form';
import cx from 'classnames';
import { CgGym } from "react-icons/cg";
import { TbFileDescription } from "react-icons/tb";
import { FaListUl, FaLink, FaPlusCircle, FaMinusCircle } from "react-icons/fa";

import { getUrlType } from "@/utils/getUrlType";

import { TextInput, TextArea} from "../FormFields";
import { LoadingButton, IconButton } from "../Button";

import styles from './ExerciseForm.module.scss';

function ExerciseForm({ initialData = {} }) {
  const titleText = "Agregar Ejercicio";
  const namePlaceholder = "Name";
  const nameRequiredError = "Name is required";
  const nameMaxLengthError = "Name cannot exceed 200 characters";
  const descriptionPlaceholder = "Description";
  const descriptionRequiredError = "Description is required";
  const descriptionMaxLengthError = "Description cannot exceed 2000 characters";
  const instructionsPlaceholder = "Instructions";
  const instructionsRequiredError = "Instructions are required";
  const instructionsMaxLengthError = "Instructions cannot exceed 8000 characters";
  const mediaTitle = "Imagenes y/o Videos";
  const urlPlaceholder = "Agegar Url";
  const urlRequiredError = "At least one media item is required";
  const urlValidTypeError = "URL must be an image or video";
  const createText = "Crear";
  
  const { register, handleSubmit, control, setValue, formState: { errors } } = useForm({
    defaultValues: {
      id: null,
      name: "",
      description: "",
      instructions: "",
      media: [{ id: null, type: "", url: "" }],
      ...initialData,
    }
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "media"
  });

  const [isLoading, setIsLoading] = useState(false);

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

  const onSubmit = async (data) => {
    setIsLoading(true);
    if (data.id) {
      // We have an ID, so we're updating an existing item
      console.log("Updating item:", data);
      // Call your API update function here...
    } else {
      // No ID, so we're creating a new item
      console.log("Creating new item:", data);
      // Call your API create function here...
    }

    // Simulate network request delay
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  const onAddMediaItem = useCallback(() => {
    append({ id: null, type: "", url: "" });
  },[append]);
  
  const onRemoveMediaItem = useCallback((e) => {
    e.stopPropagation();
    const [id] = e.currentTarget.id.split('-').slice(-1);
    remove(id);
  }, [remove]);

  const printMediaButton = useCallback((index) => {
    if (index === 0) {
      if (fields.length > 3) return;
      return (
        <IconButton
          key={index}
          className={styles.addBtn}
          type="button"
          onClick={onAddMediaItem}
          icon={FaPlusCircle}
          alt="Agregar"
        />
      );
    }
    return (
      <IconButton
          key={index}
          className={styles.removeBtn}
          type="button"
          onClick={onRemoveMediaItem}
          icon={FaMinusCircle}
          alt="Eliminar"
        />
    );
  }, [fields, onAddMediaItem, onRemoveMediaItem]);

  return (
    <>
      <h3 className={styles.title}>{titleText}</h3>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <TextInput
          register={register}
          name="name"
          icon={CgGym}
          validations={
            {
              required: nameRequiredError,
              maxLength:
              {
                value: 200, message: nameMaxLengthError,
              }
            }}
          placeholder={namePlaceholder}
        />
        {errors.name && <p className={styles.error}>{errors.name.message}</p>}

        <TextArea 
          register={register}
          name="description"
          icon={TbFileDescription}
          validations={
            {
              required: descriptionRequiredError,
              maxLength:
                {
                value: 2000, message: descriptionMaxLengthError,
              }
            }}
          placeholder={descriptionPlaceholder}
        />
        {errors.description && <p className={styles.error}>{errors.description.message}</p>}

        <TextArea
          register={register}
          name="instructions"
          icon={FaListUl}
          validations={
            {
              required: instructionsRequiredError,
              maxLength:
                {
                value: 8000, message: instructionsMaxLengthError,
              }
            }}
          placeholder={instructionsPlaceholder}
        />
        {errors.instructions && <p className={styles.error}>{errors.instructions.message}</p>}
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
                      validType: value => {
                        const type = getUrlType(value);
                        setValue(`media.${index}.type`, type);
                        return type!==undefined || urlValidTypeError;
                      }
                    }
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
              {errors.media?.[index]?.url && <p className={cx(styles.error, styles.mediaError)}>{errors.media[index].url.message}</p>}
            </div>
          ))}
        </div>
        <LoadingButton isLoading={isLoading} className={styles.submitBtn} type="submit">{createText}</LoadingButton>
      </form>
      </>
  );
}

export default ExerciseForm;
