export type LayoutProps = {
  children: React.ReactNode;
  params: { slug: string };
};
export type PageProps = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export type Media = {
  id: number;
  url: string;
  type: string;
};

export type Exercise = {
  id: number;
  name: string;
  slug: string;
  description: string;
  instructions: string;
  media: Media[];
};

export type WorkoutExercise = Omit<Exercise, 'id'> & {
  exerciseId: number;
  sets: number;
  reps: number;
  // duration?: string; //"00:30:00"
};

export type Workout = {
  id: number;
  name: string;
  slug: string;
  workoutExercises: WorkoutExercise[];
};

export type RegisterType = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export type LoginType = {
  email: string;
  password: string;
};

export type PaginationFilter = {
  pageSize?: number;
  after?: string;
  before?: string;
  search?: string;
};

export type PaginationResponse<T> = {
  data: T[];
  firstCursor: string;
  lastCursor: string;
  hasPrevPage: boolean;
  hasNextPage: boolean;
};

export type FetchError = {
  message: string;
  errors: string[];
  status: number;
  title: string;
};
