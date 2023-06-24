import React, { useState, useEffect } from "react";
import { useForm, useFieldArray } from 'react-hook-form';
import { CgGym } from "react-icons/cg";
import { TbFileDescription } from "react-icons/tb";
import { FaListUl, FaLink } from "react-icons/fa";

import { getUrlType } from "@/utils/getUrlType";

import TextInput from "../FormFields/TextInput";
import TextArea from "../FormFields/TextArea";
import styles from './ExerciseForm.module.scss';

function ExerciseForm({ initialData = {} }) {

   const { register, handleSubmit, control, setValue, trigger, formState: { errors } } = useForm({
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

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <TextInput
        register={register}
        name="name"
        icon={CgGym}
        validations={
          {
            required: "Name is required",
            maxLength:
            {
              value: 200, message: "Name cannot exceed 200 characters",
            }
          }}
        placeholder="Name"
      />
      {errors.name && <p className={styles.error}>{errors.name.message}</p>}

      <TextArea 
        register={register}
        name="description"
        icon={TbFileDescription}
        validations={
          {
            required: "Description is required",
            maxLength:
              {
              value: 2000, message: "Description cannot exceed 2000 characters",
            }
          }}
        placeholder="Description"
      />
      {errors.description && <p className={styles.error}>{errors.description.message}</p>}

      <TextArea
        register={register}
        name="instructions"
        icon={FaListUl}
        validations={
          {
            required: "Instructions are required",
            maxLength:
              {
              value: 8000, message: "Instructions cannot exceed 8000 characters",
            }
          }}
        placeholder="Instructions"
      />
      {errors.instructions && <p className={styles.error}>{errors.instructions.message}</p>}

      {fields.map((field, index) => (
        <div key={field.id} className={styles.inputField}>
  
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
              required: index === 0 ? "At least one media item is required" : undefined,
              validate: {
                validType: value => {
                  const type = getUrlType(value);
                  setValue(`media.${index}.type`, type);
                  return type!==undefined || "URL must be an image or video";
                }
              }
            }}
          
            placeholder="Enter URL"
            defaultValue={field.url}
          />
          
          <input
            {...register(`media.${index}.type`)}
            defaultValue={field.type}
            disabled
            hidden
          />
        
          {index !== 0 && <button type="button" className={styles.removeBtn} onClick={() => remove(index)}>Remove</button>}
          {errors.media?.[index]?.url && <p className={styles.error}>{errors.media[index].url.message}</p>}
        </div>
      ))}
      {fields.length < 4 && <button className={styles.addBtn}  type="button" onClick={() => append({ id: null, type: "", url: "" })}>Add</button>}
      <button className={`${styles.button} ${isLoading ? styles.loading : ''}`} type="submit" disabled={isLoading}>
        {isLoading ? 'Loading...' : 'Submit'}
      </button>
    </form>
  );
}

export default ExerciseForm;
