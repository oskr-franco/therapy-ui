import { exercisesService } from '@/services/exerciseService';

export default async function handler(req, res) {
  try {
    const result = await exercisesService.create(req.body);
    res.status(200).send(result)
  } catch (err) {
    res.status(500).send({ error: 'failed to fetch data' })
  }
}