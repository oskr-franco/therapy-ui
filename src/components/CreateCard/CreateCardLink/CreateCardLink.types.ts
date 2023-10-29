type BaseCardType = {
  text: string;
  className?: string;
};

type CreateCardLinkType = BaseCardType & {
  href: string;
};

export default CreateCardLinkType;
