import { Exercise } from '@/types';
import WithModalType from '@/hocs/withModal.types';
import WithAlertType from '@/hocs/withAlerts.types';

type ExerciseUpdateType = Partial<Exercise>;

type ExerciseFormProps = {
  initialData?: ExerciseUpdateType;
} & WithAlertType &
  WithModalType;

export default ExerciseFormProps;
