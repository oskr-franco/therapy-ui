export type Media = {
  id: string;
  url: string;
  type: string;
};

export type Exercise = {
  id: string;
  name: string;
  description: string;
  instructions: string;
  media: Media[];
};

export type WorkoutExercise = Omit<Exercise, 'id' | 'media'> & {
  exerciseId: string;
  sets: number;
  reps: number;
  duration?: string; //"00:30:00"
};

export type Workout = {
  id: string;
  name: string;
  description: string;
  workoutExercises: WorkoutExercise[];
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
  statusCode: number;
};
