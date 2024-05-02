import RegexCollection from '../regex';
import {
  MaxLengthType,
  MinLengthType,
  PatternType,
  RequiredType,
} from './types';

type LoginValidationType = {
  email: RequiredType & MaxLengthType & PatternType;
  password: RequiredType & MinLengthType;
};

const LoginValidation: LoginValidationType = {
  email: {
    required: 'Campo es requeridod',
    maxLength: {
      value: 200,
      message: 'Email is too long',
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
};

export default LoginValidation;
