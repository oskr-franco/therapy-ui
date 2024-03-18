import { UseModalResponse } from '../hooks/useModal';

type WithModalType = Omit<UseModalResponse, 'modalState'>;

export default WithModalType;
