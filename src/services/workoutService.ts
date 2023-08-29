import appConfig from '@/app.config';
import BaseService from './baseService';

const { apiService } = appConfig;
const baseUrl = `${apiService}/api/workout`;
const workoutService = new BaseService(baseUrl);

export default workoutService;
