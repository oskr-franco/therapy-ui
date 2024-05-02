import RegexCollection from '../regex';
import {
  MaxLengthType,
  MinLengthType,
  PatternType,
  RequiredType,
  ValidateType,
} from './types';

type SignupValidationType = {
  firstName: RequiredType & MaxLengthType;
  lastName: RequiredType & MaxLengthType;
  email: RequiredType & MaxLengthType & PatternType;
  password: RequiredType & MinLengthType;
  confirmPassword: RequiredType & ValidateType;
};

const SignupValidation: SignupValidationType = {
  firstName: {
    required: 'Campo es requerido',
    maxLength: {
      value: 50,
      message: 'Campos es muy largo',
    },
  },
  lastName: {
    required: 'Campo es requerido',
    maxLength: {
      value: 50,
      message: 'Campos es muy largo',
    },
  },
  email: {
    required: 'Campo es requerido',
    maxLength: {
      value: 200,
      message: 'Campos es muy largo',
    },
    pattern: {
      value: RegexCollection.email,
      message: 'Formato de email invalido',
    },
  },
  password: {
    required: 'Campo es requerido',
    minLength: {
      value: 10,
      message: 'Contraseña debe tener al menos 10 caracteres',
    },
  },
  confirmPassword: {
    required: 'Campo es requerido',
    validate: {
      matches: (value: string, values: Record<string, string>) => {
        return value === values.password || 'Passwords do not match';
      },
    },
  },
};

export default SignupValidation;
