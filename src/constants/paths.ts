type URLS = {
  Signup: string;
  Exercises: string;
  Exercise: (slug: string) => string;
  ExercisePreview: (slug: string) => string;
  Workouts: string;
  Workout: (slug: string) => string;
  WorkoutPreview: (slug: string) => string;
  CreateWorkout: string;
  EditWorkout: (slug: string) => string;
};

const Paths: URLS = {
  Signup: '/signup',
  Exercises: '/admin/exercises',
  Exercise: (slug: string) => {
    return `/admin/exercises/${slug}`;
  },
  ExercisePreview: (slug: string) => {
    return `/preview/${slug}`;
  },
  Workouts: '/admin/workouts',
  Workout: (slug: string) => {
    return `/admin/workouts/${slug}`;
  },
  WorkoutPreview: (slug: string) => {
    return `/preview/workout/${slug}`;
  },
  CreateWorkout: '/admin/workouts/build',
  EditWorkout: (slug: string) => {
    return `/admin/workouts/build/${slug}`;
  },
};

export default Paths;
