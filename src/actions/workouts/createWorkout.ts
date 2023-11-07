'use server';
import workoutService from '@/services/workoutService';
import { Workout } from '@/types';

export async function createWorkout(workout: Workout): Promise<Workout> {
  const response = await workoutService.create(workout);
  return response;
}
