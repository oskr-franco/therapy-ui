'use client';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { BsEnvelopeAt } from 'react-icons/bs';

import { LoadingButton } from '@/components/Button';
import { login } from '@/actions/auth/actions';
import { LoginType } from '@/types';
import { LoginValidation as Validations } from '@/constants/validations';
import { TextInput, PasswordInput, Error } from '@/components/FormFields';
import Paths from '@/constants/paths';
import withAlerts from '@/hocs/withAlerts';
import WithAlertType from '@/hocs/withAlerts.types';

import styles from './LoginForm.module.scss';

function LoginForm({ alert }: WithAlertType) {
  const [isLoading, setIsLoading] = useState(false);
  const emailPlaceholder = 'Correo electrónico';
  const passwordPlaceholder = 'Contraseña';
  const submitText = 'Iniciar sesión';
  const signupText = `¿No tienes una cuenta?`;
  const signupLinkText = 'Crear cuenta';
  const loginError = 'Error al iniciar sesión';

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Partial<LoginType>>();

  const onSubmit = async (data: Partial<LoginType>) => {
    setIsLoading(true);
    try {
      await login(data as LoginType);
    } catch (error) {
      console.error(error);
      alert.error(loginError);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.loginForm}>
      <h2 className={styles.title}>Login</h2>

      <TextInput
        register={register}
        icon={BsEnvelopeAt}
        placeholder={emailPlaceholder}
        id="email"
        name="email"
        validations={Validations.email}
      />
      {errors.email && <Error error={errors.email?.message} />}

      <PasswordInput
        register={register}
        name="password"
        placeholder={passwordPlaceholder}
        validations={Validations.password}
      />
      {errors.password && <Error error={errors.password?.message} />}
      <div className={styles.actions}>
        <LoadingButton
          isLoading={isLoading}
          className={styles.submitBtn}
          type="submit"
        >
          {submitText}
        </LoadingButton>

        <p className={styles.signupLink}>
          {signupText} <a href={Paths.Signup}>{signupLinkText}</a>
        </p>
      </div>
    </form>
  );
}

export default withAlerts(LoginForm);
