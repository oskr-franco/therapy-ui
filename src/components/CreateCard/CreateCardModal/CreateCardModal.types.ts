import WithModalType from '@/hocs/withModal.types';

type BaseCardType = {
  text: string;
  className?: string;
  iconSize?: 'small' | 'medium' | 'large';
  component: (input: any) => JSX.Element;
};

type CreateCardModalType = BaseCardType & WithModalType;

export default CreateCardModalType;
