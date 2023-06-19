import appConfig from '/app.config';

export default async function handler(req, res) {
  const {apiService} = appConfig;
  try {
    const result = await fetch(`${apiService}/api/exercise`)
    
    res.status(200).send({ result })
  } catch (err) {
    res.status(500).send({ error: 'failed to fetch data' })
  }
}