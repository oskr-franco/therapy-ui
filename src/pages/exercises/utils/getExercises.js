import appConfig from '@/app.config';

export const getExercises = async () => {
  const {apiService} = appConfig;
  try {
    console.log(`${apiService}/api/exercise`);
    const result = await fetch(`${apiService}/api/exercise`);
    console.log(result, `${apiService}/api/exercise`);
    return await result.json();
  } catch (err) {
    console.error(err);
    return null;
  }
}