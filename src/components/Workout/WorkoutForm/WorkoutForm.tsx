'use client';

import React, { useEffect, useState, useRef } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { SiWheniwork } from 'react-icons/si';

import ExercisePicker from '@/components/Exercise/ExercisePicker';
import { TextInput } from '@/components/FormFields';
import { LoadingButton } from '../../Button';

import WorkoutFormProps, { ExerciseState } from './WorkoutForm.types';
import styles from './WorkoutForm.module.scss';
import { WorkoutExercise } from '@/types';

function WorkoutForm({ initialData = {} }: WorkoutFormProps) {
  const workoutNamePlaceholder = 'Nombre del workout';
  const selectExercises = 'Tus ejercicios seleccionados aparecerán aquí';
  const repsPlaceholder = 'Reps para';
  const setsPlaceholder = 'Sets para';
  const setsRequiredError = 'Sets es requerido';
  const repsRequiredError = 'Repeticiones es requerido';
  const numberError = 'Solo se permiten números';
  const submitText = 'Guardar workout';

  const endOfWorkoutRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const { workoutExercises } = initialData;
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: initialData,
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'workoutExercises',
  });
  const initialState = workoutExercises?.map(
    (we) =>
      ({
        id: we.exerciseId,
        name: we.description,
      }) as ExerciseState,
  );
  const [selectedExercises, setSelectedExercises] = useState<ExerciseState[]>(
    initialState || [],
  );

  // Handle the selection of exercises
  const handleExerciseSelect = (
    exercise: ExerciseState,
    isSelected: boolean,
  ) => {
    if (isSelected) {
      append({
        exerciseId: exercise.id,
      } as WorkoutExercise);
      setSelectedExercises((prev) => [...prev, exercise]);
    } else {
      const index = selectedExercises.findIndex((e) => e.id === exercise.id);
      if (index !== -1) {
        remove(index);
        setSelectedExercises((prev) =>
          prev.filter((e) => e.id !== exercise.id),
        );
      }
    }
  };

  useEffect(() => {
    endOfWorkoutRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [selectedExercises.length]);

  const onSubmit = (data) => {
    console.log(errors);
    setIsLoading(true);
    // Clean up data and call API here
    console.log(data);
    setIsLoading(false);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <TextInput
        register={register}
        name="name"
        placeholder={workoutNamePlaceholder}
        icon={SiWheniwork}
      />
      <div className={styles.body}>
        <div className={styles.exercisePickerContainer}>
          <h4 className={styles.subtitle}>Selecciona tus ejercicios</h4>
          <ExercisePicker
            className={styles.exercisePicker}
            onSelect={handleExerciseSelect}
            selectedExercises={selectedExercises}
          />
        </div>
        <div className={styles.divider} />
        <div className={styles.workoutContainer}>
          <h4 className={styles.subtitle}>{selectExercises}</h4>
          {fields.map((field, index) => {
            const exercise = selectedExercises[index];
            return (
              <div key={field.id}>
                <span>{exercise.name}</span>
                <div className={styles.workoutFields}>
                  <input
                    {...register(`workoutExercises.${index}.exerciseId`)}
                    hidden
                  />
                  <TextInput
                    register={register}
                    name={`workoutExercises.${index}.sets`}
                    placeholder={`${setsPlaceholder} ${exercise.name}`}
                    validations={{
                      required: setsRequiredError,
                      pattern: {
                        value: /^[0-9]+$/,
                        message: numberError,
                      },
                    }}
                  />
                  <TextInput
                    register={register}
                    name={`workoutExercises.${index}.reps`}
                    placeholder={`${repsPlaceholder} ${exercise.name}`}
                    validations={{
                      required: repsRequiredError,
                      pattern: {
                        value: /^[0-9]+$/,
                        message: numberError,
                      },
                    }}
                  />
                </div>
                {errors.workoutExercises && (
                  <p className={styles.error}>
                    <span>{errors.workoutExercises[index].sets?.message}</span>
                    <span>{errors.workoutExercises[index].reps?.message}</span>
                  </p>
                )}
              </div>
            );
          })}
          <div ref={endOfWorkoutRef}></div>
        </div>
      </div>
      <LoadingButton
        isLoading={isLoading}
        className={styles.submitBtn}
        type="submit"
      >
        {submitText}
      </LoadingButton>
    </form>
  );
}

export default WorkoutForm;
