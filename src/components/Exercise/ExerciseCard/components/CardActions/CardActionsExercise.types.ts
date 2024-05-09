import WithAlertType from '@/hocs/withAlerts.types';
import WithModalType from '@/hocs/withModal.types';
import { Exercise } from '@/types';

type CardActionsExerciseProps = Exercise & WithAlertType & WithModalType;

export default CardActionsExerciseProps;
