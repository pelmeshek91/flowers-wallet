import React from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import { object, string } from 'yup';
import { useDispatch } from 'react-redux';

import { login } from '../../redux/auth/authOperations';
import { AuthButton } from '../Button/Button';

import s from './LoginForm.module.css';
import sb from '../Button/Button.module.css';

const SignupSchema = object().shape({
  password: string()
    .min(6, 'Too Short!')
    .max(12, 'Too Long!')
    .required('Required'),

  email: string().email('Invalid email').required('Required'),
});

export const LoginForm = () => {
  const dispatch = useDispatch();

  return (
    <div className={s.container}>
      <h1 className={s.title}>Wallet</h1>
      <Formik
        initialValues={{
          password: '',

          email: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={({ email, password }, { resetForm }) => {
          console.log({ email, password });
          dispatch(login({ email, password }));
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

            <AuthButton
              type={'submit'}
              text={'Log in'}
              className={sb.authSubmitButton}
            />

            <Link className={s.navLink} to="/register">
              <AuthButton
                type={'button'}
                text={'Register'}
                className={sb.authLinkButton}
              />
            </Link>
          </Form>
        )}
      </Formik>
    </div>
  );
};
