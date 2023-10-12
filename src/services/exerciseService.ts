import appConfig from '@/app.config';
import BaseService from './baseService';
import { Exercise } from '@/types';

const { apiService } = appConfig;
const baseUrl = `${apiService}/api/exercise`;
const workoutService = new BaseService<Exercise>(baseUrl);

export default workoutService;
