import { useCallback, useMemo } from "react";
import useStore from "../store/useStore";

function useExercises() {
  const type = 'exercises';
  const [state, dispatch] = useStore();
  const memoExercises = useMemo(() => state[type], [state, type]);
  const loadExercises = useCallback((exercises) => {
    const func = 'loadExercises';
    dispatch({ type, func, value: exercises })
  }, [dispatch]);

  const addExercise = useCallback((exercise) => {
    const func = 'addExercise';
    dispatch({type, func,value: exercise })
  }, [dispatch]);

  return {
    exercises: memoExercises,
    loadExercises,
    addExercise,
  }
}

export default useExercises;
