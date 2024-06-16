'use client';

import React, { useEffect, useState, useRef } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { SiWheniwork } from 'react-icons/si';
import { useRouter } from 'next/navigation';

import PATHS from '@/constants/paths';
import ExercisePicker from '@/components/Exercise/ExercisePicker';
import { TextInput, Error } from '@/components/FormFields';
import { LoadingButton } from '../../Button';
import { Workout, WorkoutExercise } from '@/types';
import { createWorkout, updateWorkout } from '@/actions/workouts/actions';
import withAlerts from '@/hocs/withAlerts';
import { CreateCardModal } from '@/components/CreateCard';
import ExerciseForm from '@/components/Exercise/ExerciseForm';

import WorkoutFormProps, { ExerciseState } from './WorkoutForm.types';
import styles from './WorkoutForm.module.scss';

function WorkoutForm({
  initialData = {},
  initialExercises,
  alert,
}: WorkoutFormProps) {
  const workoutNamePlaceholder = 'Nombre de la rutina';
  const buildWorkout = 'Construye tu rutina';
  const selectExercises = 'Selecciona tus ejercicios';
  const repsPlaceholder = 'Ej: 12 repeticiones';
  const setsPlaceholder = 'Ej: 3 series';
  const requiredError = 'Campo es requerido';
  const setsRequiredError = 'Series es requerido';
  const repsRequiredError = 'Repeticiones es requerido';
  const submitText = 'Guardar rutina';
  const selectAtLeastOneExercise = 'Selecciona al menos un ejercicio';
  const workoutUpdatedSuccesfully = 'Rutina actualizada exitosamente';
  const workoutCreatedSuccesfully = 'Rutina creada exitosamente';
  const addExercise = 'Crear Ejercicio';

  const router = useRouter();
  const endOfWorkoutRef = useRef<HTMLDivElement | null>(null);
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

  const onSubmit = async (data: Partial<Workout>) => {
    if (!data.workoutExercises?.length) {
      alert.error(selectAtLeastOneExercise);
      return;
    }
    setIsLoading(true);
    const workout = data as Workout;
    if (data.id) {
      await updateWorkout(workout);
      router.push(PATHS.Workouts);
      alert.success(workoutUpdatedSuccesfully);
    } else {
      const result = await createWorkout(workout);
      if (!!result.id) {
        router.push(PATHS.Workouts);
        alert.success(workoutCreatedSuccesfully);
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
          required: requiredError,
        }}
      />
      {errors.name && <Error error={errors.name?.message} />}
      <div className={styles.body}>
        <div className={styles.exercisePickerContainer}>
          <h4 className={styles.subtitle}>{selectExercises}</h4>
          <CreateCardModal
            className={styles.card}
            text={addExercise}
            component={ExerciseForm}
            iconSize="small"
          />
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
                      valueAsNumber: true,
                    }}
                  />
                  <TextInput
                    register={register}
                    name={`workoutExercises.${index}.reps`}
                    placeholder={`${repsPlaceholder}`}
                    type="number"
                    validations={{
                      required: repsRequiredError,
                      valueAsNumber: true,
                    }}
                  />
                </div>
                {errors.workoutExercises && (
                  <p className={styles.error}>
                    <Error
                      error={errors.workoutExercises[index]?.sets?.message}
                    />
                    <Error
                      error={errors.workoutExercises[index]?.reps?.message}
                    />
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
