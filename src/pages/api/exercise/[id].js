import { exercisesService } from '@/services/exerciseService';

export default async function handler(req, res) {
  const updateExercise = async () => {
    try {
      const result = await exercisesService.update(req.query.id, req.body);
      res.status(200).send(result)
    } catch (err) {
      res.status(500).send({ error: 'failed to update data' })
    }
  }

  const removeExercise = async () => {
    try {
      const result = await exercisesService.delete(req.query.id);
      res.status(204).send({})
    } catch (err) {
      res.status(500).send({ error: 'failed to remove data' })
    }
  }

  switch (req.method) {
    case 'PUT':
        return updateExercise();
    case 'DELETE':
      return removeExercise();
    default:
        return res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}