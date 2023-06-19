import React, { useState, useEffect } from "react";
import cx from 'classnames';
import { useForm, useFieldArray } from 'react-hook-form';
import styles from './ExerciseForm.module.scss';

function ExerciseForm({ initialData = {} }) {

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

  // useEffect(() => {
  //   if (initialData.media) {
  //     initialData.media.forEach((_, index) => {
  //       append({ value: "" });
  //     });
  //   }
  // }, [initialData.media, append]);

  // useEffect(() => {
  //   if (initialData.media) {
  //     initialData.media.forEach((item, index) => {
  //       setValue(`media.${index}.value`, item.value);
  //     });
  //   }
  // }, [initialData.media, setValue]);

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

      <input
        {...register('name', { required: "Name is required", maxLength: { value: 200, message: "Name cannot exceed 200 characters" } })}
        className={styles.input}
        type="text"
        placeholder="Name"
      />
      {errors.name && <p className={styles.error}>{errors.name.message}</p>}

      <textarea
        {...register('description', { required: "Description is required", maxLength: { value: 2000, message: "Description cannot exceed 2000 characters" } })}
        className={styles.input}
        placeholder="Description"
      />
      {errors.description && <p className={styles.error}>{errors.description.message}</p>}

      <textarea
        {...register('instructions', { required: "Instructions are required", maxLength: { value: 8000, message: "Instructions cannot exceed 8000 characters" } })}
        className={styles.input}
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
  
          <input
            {...register(`media.${index}.url`, index === 0 ? { required: "At least one media item is required" } : {})} defaultValue={field.url}
            className={styles.input}
            type="text"
            placeholder="Enter media URL"
            onChange={(e) => {
              const url = e.target.value;
              const type = url.match(/\.(jpeg|jpg|gif|png)$/) !== null ? "Image" : "Video";
              setValue(`media.${index}.type`, type);
            }}
          />
  
          <input
            {...register(`media.${index}.type`)}
            defaultValue={field.type}
            disabled
          />
        
          {index !== 0 && <button type="button" className={styles.removeBtn} onClick={() => remove(index)}>Remove</button>}
          {errors.media?.[index]?.value && <p className={styles.error}>{errors.media[index].value.message}</p>}
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
