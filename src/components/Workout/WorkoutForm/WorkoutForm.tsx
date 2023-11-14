'use client';

import React, { useEffect, useState, useRef } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { SiWheniwork } from 'react-icons/si';
import { useRouter } from 'next/navigation';

import ExercisePicker from '@/components/Exercise/ExercisePicker';
import { TextInput } from '@/components/FormFields';
import { LoadingButton } from '../../Button';
import { Workout, WorkoutExercise } from '@/types';
import { createWorkout, updateWorkout } from '@/actions/workouts/actions';
import withAlerts from '@/hocs/withAlerts';

import WorkoutFormProps, { ExerciseState } from './WorkoutForm.types';
import styles from './WorkoutForm.module.scss';

function WorkoutForm({
  initialData = {},
  initialExercises,
  alert,
}: WorkoutFormProps) {
  const workoutNamePlaceholder = 'Nombre del workout';
  const buildWorkout = 'Construye tu workout';
  const selectExercises = 'Selecciona tus ejercicios';
  const repsPlaceholder = 'Ej: 12 repeticiones';
  const setsPlaceholder = 'Ej: 3 series';
  const RequiredError = 'Campo es requerido';
  const setsRequiredError = 'Series es requerido';
  const repsRequiredError = 'Repeticiones es requerido';
  const numberError = 'Solo se permiten números';
  const submitText = 'Guardar workout';

  const router = useRouter();
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
        name: we.name,
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

  const onSubmit = async (data: Workout) => {
    if (!data.workoutExercises.length) {
      alert.error('Selecciona al menos un ejercicio');
      return;
    }
    setIsLoading(true);
    if (data.id) {
      await updateWorkout(data.id, data);
      router.push('/workouts');
      alert.success('Workout actualizado exitosamente');
    } else {
      const result = await createWorkout(data);
      if (!!result.id) {
        router.push('/workouts');
        alert.success('Workout creado exitosamente');
      }
    }
    setIsLoading(false);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <h2 className={styles.title}>{buildWorkout}</h2>
      <TextInput
        register={register}
        name="name"
        placeholder={workoutNamePlaceholder}
        icon={SiWheniwork}
        validations={{
          required: RequiredError,
        }}
      />
      {errors.name && <p className={styles.error}>{errors.name.message}</p>}
      <div className={styles.body}>
        <div className={styles.exercisePickerContainer}>
          <h4 className={styles.subtitle}>{selectExercises}</h4>
          <ExercisePicker
            className={styles.exercisePicker}
            initialExercises={initialExercises}
            onSelect={handleExerciseSelect}
            selectedExercises={selectedExercises}
          />
        </div>
        <div className={styles.divider} />
        <div className={styles.workoutContainer}>
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
                    placeholder={`${setsPlaceholder}`}
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
                    placeholder={`${repsPlaceholder}`}
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

export default withAlerts(WorkoutForm);
