import React from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import { object, string, ref } from 'yup';

import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/authOperations';
// import { AuthButton } from '../Button/Button';

import s from './RegisterForm.module.css';

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
    <div>
      <h1>Signup</h1>
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
            {errors.email && touched.email ? <div>{errors.email}</div> : null}
            <Field
              className={s.input}
              name="password"
              type="password"
              placeholder="Password"
            />
            {errors.password && touched.password ? (
              <div>{errors.password}</div>
            ) : null}
            <Field
              className={s.input}
              name="confirmPassword"
              type="password"
              placeholder="Confirm password"
            />
            {errors.confirmPassword && touched.confirmPassword ? (
              <div>{errors.confirmPassword}</div>
            ) : null}
            <Field
              className={s.input}
              name="username"
              placeholder="First name"
            />
            {errors.username && touched.username ? (
              <div>{errors.username}</div>
            ) : null}

            <button type="submit" className={s.authSubmitButton}>
              Register
            </button>
            <Link className={s.navLink} to="/login">
              <button className={s.authNavButton}>Log in</button>
            </Link>
          </Form>
        )}
      </Formik>
    </div>
  );
};
