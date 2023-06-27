import React from 'react';

import useExercises from '../hooks/useExercises';

export const withExercises = (component) => {
  const MemoComponent = React.memo(component);
  const ExercisesComponent = (props) => {
    const {
      exercises,
    } = useExercises();

    if (!exercises) {
      return null;
    }

    return <MemoComponent {...props} exercises={exercises} />;
  }

  return ExercisesComponent;
}


export const withExerciseActions = (component) => {
  const MemoComponent = React.memo(component);
  const ExercisesComponent = (props) => {
    const {
      loadExercises,
      addExercise
    } = useExercises();

    return <MemoComponent {...props} loadExercises={loadExercises} addExercise={addExercise} />;
  }

  return ExercisesComponent;
}

