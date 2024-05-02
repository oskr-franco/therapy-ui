'use client';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { BsEnvelopeAt } from 'react-icons/bs';

import styles from './LoginForm.module.scss';
import { TextInput, PasswordInput, Error } from '@/components/FormFields';
import { LoadingButton } from '@/components/Button';
import Paths from '@/constants/paths';
import { LoginValidation as Validations } from '@/constants/validations';

type LoginData = {
  email: string;
  password: string;
};

function LoginForm() {
  const [isLoading, setIsLoading] = useState(false);
  const emailPlaceholder = 'Email';
  const passwordPlaceholder = 'Contraseña';
  const submitText = 'Login';
  const signupText = `Don\'t have an account? Sign up`;
  const signupLinkText = 'Sign up';
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Partial<LoginData>>();

  const onSubmit = (data: Partial<LoginData>) => {
    setIsLoading(true);
    console.log(data);
    setIsLoading(false);
    // Implement your login logic here
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

export default LoginForm;
