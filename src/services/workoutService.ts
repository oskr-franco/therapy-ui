import appConfig from '@/app.config';
import BaseService from './baseService';
import { Workout } from '@/types';

const { apiService } = appConfig;
const baseUrl = `${apiService}/api/workout`;
const workoutService = new BaseService<Workout>(baseUrl);

export default workoutService;
