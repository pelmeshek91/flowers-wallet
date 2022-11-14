import React from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import { object, string, ref } from 'yup';

import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/authOperations';
import { AuthButton } from '../Button/Button';

import { ReactComponent as LogoIcon } from '../../images/AuthForm/logo-icon.svg';
import { ReactComponent as Mail } from '../../images/AuthForm/mail-icon.svg';
import { ReactComponent as Password } from '../../images/AuthForm/password-icon.svg';
import { ReactComponent as Name } from '../../images/AuthForm/name-icon.svg';

import s from './RegisterForm.module.css';
import sb from '../Button/Button.module.css';
import { useMediaQuery } from 'react-responsive';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const SignupSchema = object().shape({
    username: string()
      .min(2, 'Too Short!')
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

  const onSubmit = (values, { resetForm, setValues }) => {
    const { username, email, password } = values;
    dispatch(register({ username, email, password }));

    resetForm();
  };

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      username: '',
      password: '',
      confirmPassword: '',
      email: '',
    },
    validationSchema: SignupSchema,
    onSubmit,
  });

  const passwordArr = [...values.password];
  const confirmPasswordArr = [...values.confirmPassword];

  const isTablet = useMediaQuery({ query: '(min-width: 768px)' });
  let w;
  isTablet ? (w = 410) : (w = 288);
  let k = 0;

  const confirmPasswordTrue = confirmPasswordArr.every((item, i) => {
    return item === passwordArr[i];
  });

  passwordArr.length && !isSubmitting && confirmPasswordTrue
    ? (k = values.confirmPassword.length / values.password.length)
    : (k = 0);

  return (
    <div className={s.mainFormBox}>
      <div className={s.formBox}>
        <h1 className={s.title}>
          <LogoIcon className={s.logoIcon} />
        </h1>
        <form onSubmit={handleSubmit} className={s.form} autoComplete="off">
          <div className={s.label}>
            <Mail className={s.inputIcon} />
            <input
              className={s.input}
              value={values.email}
              onChange={handleChange}
              id="email"
              type="email"
              placeholder="E-mail"
            />
          </div>
          <div className={s.error}>
            {errors.email || touched.email ? <div>{errors.email} </div> : null}
          </div>

          <div className={s.label}>
            <Password className={s.inputIcon} />
            <input
              className={s.input}
              value={values.password}
              onChange={handleChange}
              id="password"
              type="password"
              placeholder="Password"
            />
          </div>
          <div className={s.error}>
            {errors.password || touched.password ? (
              <div>{errors.password}</div>
            ) : null}
          </div>

          <div className={s.label}>
            <Password className={s.inputIcon} />
            <input
              className={s.input}
              value={values.confirmPassword}
              onChange={handleChange}
              id="confirmPassword"
              type="password"
              placeholder="Confirm password"
              onBlur={handleBlur}
            />
          </div>
          <div className={s.error}>
            {(errors.confirmPassword && touched.confirmPassword) ||
            !confirmPasswordTrue ? (
              <div>{errors.confirmPassword}</div>
            ) : (
              <div className={s.statusBar}>
                <div
                  style={{
                    borderTop: '4px solid #24CCA7',
                    borderRadius: '2px',
                    boxShadow: '0px 1px 8px rgba(36, 204, 167, 0.5)',
                    width: `${k * w}px`,
                  }}
                ></div>
              </div>
            )}
          </div>

          <div className={s.label}>
            <Name className={s.inputIcon} />
            <input
              className={s.input}
              id="username"
              type="text"
              placeholder="First name"
              value={values.username}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
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
        </form>
      </div>
    </div>
  );
};
