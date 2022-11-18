import React from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import { object, string } from 'yup';
import { useDispatch } from 'react-redux';
// import { useSelector } from 'react-redux';
// import { selectError } from 'redux/auth/authSelectors';

// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { toast } from 'react-toastify';

import { login } from '../../redux/auth/authOperations';
import { AuthButton } from '../Button/Button';

import { ReactComponent as LogoIcon } from '../../images/AuthForm/logo-icon.svg';
import { ReactComponent as Mail } from '../../images/AuthForm/mail-icon.svg';
import { ReactComponent as Password } from '../../images/AuthForm/password-icon.svg';
// import { ReactComponent as Name } from '../../images/AuthForm/name-icon.svg';

import s from './LoginForm.module.css';
import sb from '../Button/Button.module.css';
// import { Label } from '@mui/icons-material';

const SignupSchema = object().shape({
  password: string()
    .min(6, 'Too Short!')
    .max(12, 'Too Long!')
    .required('Required'),

  email: string().email('Invalid email').required('Required'),
});

export const LoginForm = () => {
  const dispatch = useDispatch();

  // const error = useSelector(selectError);

  // error && toast.error(`${error}`);

  return (
    <div className={s.mainFormBox}>
      <div className={s.formBox}>
        <h1 className={s.title}>
          <LogoIcon
            style={{
              height: '30px',
              width: `120px`,
            }}
          />
        </h1>
        <Formik
          initialValues={{
            password: '',

            email: '',
          }}
          validationSchema={SignupSchema}
          onSubmit={({ email, password }, { resetForm }) => {
            dispatch(login({ email, password }));
            resetForm();
          }}
        >
          {({ errors, touched }) => (
            <Form className={s.form}>
              {/* <ToastContainer position="top-center" autoClose={2000} /> */}
              <div className={s.label}>
                <Mail className={s.inputIcon} />
                <Field
                  className={s.input}
                  name="email"
                  type="email"
                  placeholder="E-mail"
                />
              </div>
              <div className={s.error}>
                {errors.email && touched.email ? (
                  <div>{errors.email}</div>
                ) : null}
              </div>
              <div className={s.label}>
                <Password className={s.inputIcon} />
                <Field
                  className={s.input}
                  name="password"
                  type="password"
                  placeholder="Password"
                />
              </div>
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
    </div>
  );
};
