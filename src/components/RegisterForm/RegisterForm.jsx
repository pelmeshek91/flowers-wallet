import React from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import { object, string, ref } from 'yup';

import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/authOperations';
import { AuthButton } from '../Button/Button';

import s from './RegisterForm.module.css';
import sb from '../Button/Button.module.css';

const SignupSchema = object().shape({
  username: string()
    .min(1, 'Too Short!')
    .max(12, 'Too Long!')
    .required('Required'),
  password: string()
    .min(6, 'Too Short!')
    .max(12, 'Too Long!')
    .required('Required'),
  confirmPassword: string()
    .required('Please confirm your password')
    .oneOf([ref('password')], 'Passwords do not match'),
  email: string().email('Invalid email').required('Required'),
});

export const RegisterForm = () => {
  console.log('q');
  const dispatch = useDispatch();

  return (
    <div className={s.container}>
      <h1 className={s.title}>Wallet</h1>
      <Formik
        initialValues={{
          username: '',
          password: '',
          confirmPassword: '',
          email: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={({ email, password, username }, { resetForm }) => {
          // same shape as initial values
          console.log({ email, password, username });
          dispatch(register({ username, email, password }));
          resetForm();
        }}
      >
        {({ errors, touched }) => (
          <Form className={s.form}>
            <Field
              className={s.input}
              name="email"
              type="email"
              placeholder="E-mail"
            />
            <div className={s.error}>
              {errors.email && touched.email ? <div>{errors.email}</div> : null}
            </div>
            <Field
              className={s.input}
              name="password"
              type="password"
              placeholder="Password"
            />
            <div className={s.error}>
              {errors.password && touched.password ? (
                <div>{errors.password}</div>
              ) : null}
            </div>
            <Field
              className={s.input}
              name="confirmPassword"
              type="password"
              placeholder="Confirm password"
            />
            <div className={s.error}>
              {errors.confirmPassword && touched.confirmPassword ? (
                <div>{errors.confirmPassword}</div>
              ) : null}
            </div>
            <Field
              className={s.input}
              name="username"
              placeholder="First name"
            />
            <div className={s.error}>
              {errors.username && touched.username ? (
                <div>{errors.username}</div>
              ) : null}
            </div>

            <AuthButton
              type={'submit'}
              text={'Register'}
              className={sb.authSubmitButton}
            />
            <Link className={s.navLink} to="/login">
              <AuthButton
                type={'button'}
                text={'Log in'}
                className={sb.authLinkButton}
              />
            </Link>
          </Form>
        )}
      </Formik>
    </div>
  );
};
