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

export type Workout = {
  id: string;
  name: string;
  description: string;
  exercises: Exercise[];
};

export type PaginationResponse<T> = {
  data: T[];
  firstCursor: string;
  lastCursor: string;
  hasPrevPage: boolean;
  hasNextPage: boolean;
};
