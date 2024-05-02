'use client';
import React, { useState } from 'react';
import { LoadingButton } from '@/components/Button';
import { TextInput, PasswordInput, Error } from '@/components/FormFields';
import { useForm } from 'react-hook-form';
import { BsEnvelopeAt, BsPerson, BsPersonFill } from 'react-icons/bs';
import { SignupValidation as Validations } from '@/constants/validations';

import styles from './SignupForm.module.scss';

type SignupData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const SignupForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Partial<SignupData>>();
  const onSubmit = (data: Partial<SignupData>) => {
    setIsLoading(true);
    console.log(data);
    setIsLoading(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.signupForm}>
      <h2 className={styles.title}>Sign Up</h2>

      <TextInput
        register={register}
        id="firstName"
        name="firstName"
        icon={BsPerson}
        placeholder="First Name"
        validations={Validations.firstName}
      />
      {errors.firstName && <Error error={errors.firstName.message} />}

      <TextInput
        register={register}
        id="lastName"
        name="lastName"
        icon={BsPersonFill}
        placeholder="Last Name"
        validations={Validations.lastName}
      />
      {errors.lastName && <Error error={errors.lastName.message} />}

      <TextInput
        register={register}
        id="email"
        name="email"
        icon={BsEnvelopeAt}
        placeholder="Email"
        validations={Validations.email}
      />
      {errors.email && <Error error={errors.email.message} />}

      <PasswordInput
        register={register}
        id="password"
        name="password"
        placeholder="Password"
        validations={Validations.password}
      />
      {errors.password && <Error error={errors.password.message} />}

      <PasswordInput
        register={register}
        id="confirmPassword"
        name="confirmPassword"
        placeholder="Confirm Password"
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
          Sign Up
        </LoadingButton>
        <p className={styles.loginLink}>
          Already have an account? <a href="/login">Log in</a>
        </p>
      </div>
    </form>
  );
};

export default SignupForm;
