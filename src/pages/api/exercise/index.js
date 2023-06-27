import appConfig from '@/app.config';

export default async function handler(req, res) {
  const { apiService } = appConfig;
  try {
    const result = await fetch(`${apiService}/api/Exercise`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(req.body),
    });   
    const data = await result.json();
    res.status(result.status).send(data)
  } catch (err) {
    res.status(500).send({ error: 'failed to fetch data' })
  }
}