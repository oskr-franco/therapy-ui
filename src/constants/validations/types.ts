export type RequiredType = {
  required: string;
};

export type MinLengthType = {
  minLength: {
    value: number;
    message: string;
  };
};

export type MaxLengthType = {
  maxLength: {
    value: number;
    message: string;
  };
};

export type PatternType = {
  pattern: {
    value: RegExp;
    message: string;
  };
};

export type ValidateType = {
  validate: {
    [key: string]: (
      value: string,
      values: Record<string, string>,
    ) => string | boolean;
  };
};
