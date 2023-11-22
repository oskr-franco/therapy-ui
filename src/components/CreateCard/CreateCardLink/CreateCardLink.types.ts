type BaseCardType = {
  text: string;
  className?: string;
};

type CreateCardLinkType = BaseCardType & {
  href: string;
  iconSize?: 'small' | 'medium' | 'large';
};

export default CreateCardLinkType;
