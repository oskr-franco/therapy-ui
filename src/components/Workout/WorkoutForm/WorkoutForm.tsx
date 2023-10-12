'use client';

import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { SiWheniwork } from 'react-icons/si';

import ExercisePicker from '@/components/Exercise/ExercisePicker';
import { TextInput } from '@/components/FormFields';
import { LoadingButton } from '../../Button';

import WorkoutFormProps, { ExerciseState } from './WorkoutForm.types';
import styles from './WorkoutForm.module.scss';

function WorkoutForm({ initialData = {} }: WorkoutFormProps) {
  const submitText = 'Guardar workout';
  const endOfWorkoutRef = React.useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const { workoutExercises } = initialData;
  const { handleSubmit, register, setValue } = useForm({
    defaultValues: initialData,
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
      setSelectedExercises((prev) => [...prev, exercise]);
      setValue(
        `workoutExercises.${selectedExercises.length}.exerciseId`,
        exercise.id,
      );
    } else {
      const index = selectedExercises.indexOf(exercise);
      if (index !== -1) {
        setSelectedExercises((prev) =>
          prev.filter((e) => e.id !== exercise.id),
        );

        // Remove the entire object from the workoutExercises array
        setValue(`workoutExercises.${index}`, undefined);
      }
    }
  };

  useEffect(() => {
    endOfWorkoutRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [selectedExercises.length]);

  const onSubmit = (data) => {
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
        placeholder="Workout name"
        icon={SiWheniwork}
      />
      <div className={styles.body}>
        <ExercisePicker
          className={styles.exercisePicker}
          onSelect={handleExerciseSelect}
          selectedExercises={selectedExercises}
        />
        <div className={styles.workoutContainer}>
          <p>Empiza seleccionando Tus ejercicios</p>
          {selectedExercises.map((exercise, index) => {
            return (
              <div key={exercise.id}>
                <span>{exercise.name}</span>
                <div className={styles.workoutFields}>
                  <input
                    {...register(`workoutExercises.${index}.exerciseId`)}
                    defaultValue={exercise.id}
                    hidden
                  />
                  <TextInput
                    register={register}
                    name={`workoutExercises.${index}.sets`}
                    placeholder="Sets"
                  />
                  <TextInput
                    register={register}
                    name={`workoutExercises.${index}.reps`}
                    placeholder="Reps"
                  />
                  <TextInput
                    register={register}
                    name={`workoutExercises.${index}.duration`}
                    placeholder="Duration"
                  />
                </div>
                <div ref={endOfWorkoutRef}></div>
              </div>
            );
          })}
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
