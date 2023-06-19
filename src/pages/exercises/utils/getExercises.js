import appConfig from '@/app.config';

export const getExercises = async () => {
  const {apiService} = appConfig;
  try {
    const result = await fetch(`${apiService}/api/exercise`);
    return await result.json();
  } catch (err) {
    console.error(err);
    return null;
  }
}