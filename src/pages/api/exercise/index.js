import { exercisesService } from '@/services/exerciseService';

export default async function handler(req, res) {
  try {
    const result = await exercisesService.create(req.body, false);
    const data = await result.json();
    res.status(result.status).send(data)
  } catch (err) {
    res.status(500).send({ error: 'failed to fetch data' })
  }
}