type URLS = {
  Exercises: string;
  Exercise: (id: number) => string;
  ExercisePreview: (id: number) => string;
  Workouts: string;
  Workout: (id: number) => string;
  WorkoutPreview: (id: number) => string;
  CreateWorkout: string;
  EditWorkout: (id: number) => string;
};

const Paths: URLS = {
  Exercises: '/admin/exercises',
  Exercise: (id: number) => {
    return `/admin/exercises/${id}`;
  },
  ExercisePreview: (id: number) => {
    return `/preview/${id}`;
  },
  Workouts: '/admin/workouts',
  Workout: (id: number) => {
    return `/admin/workouts/${id}`;
  },
  WorkoutPreview: (id: number) => {
    return `/preview/workout/${id}`;
  },
  CreateWorkout: '/admin/workouts/build',
  EditWorkout: (id: number) => {
    return `/admin/workouts/build/${id}`;
  },
};

export default Paths;
