import WithModalType from '@/hocs/withOpenModal.types';

type BaseCardType = {
  text: string;
  className?: string;
  iconSize?: 'small' | 'medium' | 'large';
  component: (input: unknown) => JSX.Element;
};

type CreateCardModalType = BaseCardType & WithModalType;

export default CreateCardModalType;
