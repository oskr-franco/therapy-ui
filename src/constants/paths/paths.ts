export const NEXT_URL_NAME = 'next';

type URLS = {
  Signup: string;
  Login: (next?: string) => string;
  Dashboard: string;
  Exercises: string;
  Exercise: (slug: string) => string;
  ExercisePreview: (slug: string) => string;
  Workouts: string;
  Workout: (slug: string) => string;
  WorkoutPreview: (slug: string) => string;
  CreateWorkout: string;
  EditWorkout: (slug: string) => string;
};

export enum PathsEnum {
  Signup = '/signup',
  Login = '/login',
  Dashboard = '/admin',
  Exercises = '/admin/exercises',
  ExercisePreview = '/preview',
  Workout = '/admin/workouts',
  WorkoutPreview = '/preview/workout',
  WorkoutBuild = '/admin/workouts/build',
}

const isEnumInPath = (nextPath: string) => {
  return Object.values(PathsEnum).some((path) => nextPath.includes(path));
};

const AppendNext = (path: PathsEnum, nextPath?: string) => {
  if (!nextPath || !isEnumInPath(nextPath)) return path;
  const nextEncoded = encodeURIComponent(nextPath);
  return `${path}?${NEXT_URL_NAME}=${nextEncoded}`;
};

const PATHS: URLS = {
  Signup: PathsEnum.Signup,
  Login: (next?: string) => AppendNext(PathsEnum.Login, next),
  Dashboard: PathsEnum.Dashboard,
  Exercises: PathsEnum.Exercises,
  Exercise: (slug: string) => {
    return `${PathsEnum.Exercises}/${slug}`;
  },
  ExercisePreview: (slug: string) => {
    return `${PathsEnum.ExercisePreview}/${slug}`;
  },
  Workouts: PathsEnum.Workout,
  Workout: (slug: string) => {
    return `${PathsEnum.Workout}/${slug}`;
  },
  WorkoutPreview: (slug: string) => {
    return `${PathsEnum.WorkoutPreview}/${slug}`;
  },
  CreateWorkout: PathsEnum.WorkoutBuild,
  EditWorkout: (slug: string) => {
    return `${PathsEnum.WorkoutBuild}/${slug}`;
  },
};

export default PATHS;
