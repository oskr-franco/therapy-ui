'use client';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { BsEnvelopeAt, BsPerson, BsPersonFill } from 'react-icons/bs';

import { LoadingButton } from '@/components/Button';
import { RegisterType } from '@/types';
import { signup } from '@/actions/auth/actions';
import { SignupValidation as Validations } from '@/constants/validations';
import { TextInput, PasswordInput, Error } from '@/components/FormFields';
import withAlerts from '@/hocs/withAlerts';
import WithAlertType from '@/hocs/withAlerts.types';

import styles from './SignupForm.module.scss';

const SignupForm = ({ alert }: WithAlertType) => {
  const [isLoading, setIsLoading] = useState(false);
  const firstNamePlaceholder = 'Nombre';
  const lastNamePlaceholder = 'Apellido';
  const emailPlaceholder = 'Correo electrónico';
  const passwordPlaceholder = 'Contraseña';
  const confirmPasswordPlaceholder = 'Confirmar Contraseña';
  const signupText = 'Crear cuenta';
  const loginText = '¿Ya tienes una cuenta?';
  const loginLinkText = 'Iniciar sesión';
  const signupError = 'Error al crear cuenta';

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Partial<RegisterType>>();
  const onSubmit = async (data: Partial<RegisterType>) => {
    setIsLoading(true);
    try {
      await signup(data as RegisterType);
    } catch (error) {
      console.error(error);
      alert.error(signupError);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.signupForm}>
      <h2 className={styles.title}>Sign Up</h2>

      <TextInput
        register={register}
        id="firstName"
        name="firstName"
        icon={BsPerson}
        placeholder={firstNamePlaceholder}
        validations={Validations.firstName}
      />
      {errors.firstName && <Error error={errors.firstName.message} />}

      <TextInput
        register={register}
        id="lastName"
        name="lastName"
        icon={BsPersonFill}
        placeholder={lastNamePlaceholder}
        validations={Validations.lastName}
      />
      {errors.lastName && <Error error={errors.lastName.message} />}

      <TextInput
        register={register}
        id="email"
        name="email"
        icon={BsEnvelopeAt}
        placeholder={emailPlaceholder}
        validations={Validations.email}
      />
      {errors.email && <Error error={errors.email.message} />}

      <PasswordInput
        register={register}
        id="password"
        name="password"
        placeholder={passwordPlaceholder}
        validations={Validations.password}
      />
      {errors.password && <Error error={errors.password.message} />}

      <PasswordInput
        register={register}
        id="confirmPassword"
        name="confirmPassword"
        placeholder={confirmPasswordPlaceholder}
        validations={Validations.confirmPassword}
      />
      {errors.confirmPassword && (
        <Error error={errors.confirmPassword.message} />
      )}

      <div className={styles.actions}>
        <LoadingButton
          isLoading={isLoading}
          className={styles.submitBtn}
          type="submit"
        >
          {signupText}
        </LoadingButton>
        <p className={styles.loginLink}>
          {loginText} <a href="/login">{loginLinkText}</a>
        </p>
      </div>
    </form>
  );
};

export default withAlerts(SignupForm);
