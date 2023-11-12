'use server';
import workoutService from '@/services/workoutService';
import { Workout } from '@/types';

export async function getWorkout(id: number): Promise<Workout> {
  return workoutService.getById(id);
}

export async function createWorkout(workout: Workout): Promise<Workout> {
  return workoutService.create(workout);
}

export async function updateWorkout(
  id: number,
  workout: Workout,
): Promise<void> {
  return workoutService.update(id, workout);
}

export async function deleteWorkout(id: string): Promise<void> {
  await workoutService.delete(id);
}
