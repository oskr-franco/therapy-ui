import { exercisesService } from '@/services/exerciseService';

export default async function handler(req, res) {
  const createExercise = async () => {
    try {
      const result = await exercisesService.create(req.body);
      res.status(201).send(result)
    } catch (err) {
      res.status(500).send({ error: 'failed to create data' })
    }
  }
  switch (req.method) {
    case 'POST':
      return createExercise();
    default:
        return res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}