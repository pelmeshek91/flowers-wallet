import React from 'react';
import { Formik, Form, Field } from 'formik';
import { object, string } from 'yup';
import { useDispatch } from 'react-redux';

import { login } from '../../redux/auth/authOperations';
// import { AuthButton } from '../Button/Button';

import s from './LoginForm.module.css';

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
    <div>
      <h1>SignIn</h1>
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

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
