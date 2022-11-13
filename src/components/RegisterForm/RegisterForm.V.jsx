import React from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import { object, string, ref } from 'yup';
// import { useFormik } from 'formik';

import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/authOperations';
import { AuthButton } from '../Button/Button';

import { ReactComponent as LogoIcon } from '../../images/logo-icon.svg';
import { ReactComponent as LogoText } from '../../images/logo-mogo.svg';
import { ReactComponent as Mail } from '../../images/AuthForm/mail-icon.svg';
import { ReactComponent as Password } from '../../images/AuthForm/password-icon.svg';
import { ReactComponent as Name } from '../../images/AuthForm/name-icon.svg';

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

export const SignUp = () => {
  const dispatch = useDispatch();

  // const values = useFormik({
  //   initialValues: {
  //     username: '',
  //     password: '',
  //     confirmPassword: '',
  //     email: '',
  //   },
  // });
  // console.log(values);

  // const handleChange = ({ target: { name, value } }) => {
  //   console.log(value);
  // };
  let w = 288;
  let k = 0.8;

  return (
    <div className={s.container}>
      <h1 className={s.title}>
        <LogoIcon />
        <LogoText />
      </h1>
      <Formik
        initialValues={{
          username: '',
          password: '',
          confirmPassword: '',
          email: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={({ email, password, username }, { resetForm }) => {
          dispatch(register({ username, email, password }));
          console.log(email, password, username);
          resetForm();
        }}
        // console.log(values);

        // onChange={values => {
        //   console.log(values);
        // }}
      >
        {({ errors, touched }) => (
          <Form className={s.form}>
            <div className={s.label}>
              <Mail className={s.inputIcon} />
              <Field
                className={s.input}
                name="email"
                type="email"
                placeholder="E-mail"
                // onChange={e => handleChange(e)}
              />
            </div>
            <div className={s.error}>
              {errors.email && touched.email ? (
                <div>{errors.email} </div>
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
            <div className={s.label}>
              <Password className={s.inputIcon} />
              <Field
                className={s.input}
                name="confirmPassword"
                type="password"
                placeholder="Confirm password"
              />
            </div>
            <div className={s.error}>
              {errors.confirmPassword && touched.confirmPassword ? (
                <div>{errors.confirmPassword}</div>
              ) : (
                <div
                  style={{
                    border: '4px solid #24CCA7',
                    boxShadow: '0px 1px 8px rgba(36, 204, 167, 0.5)',
                    // height: '4px',
                    width: `${k * w}px`,
                  }}
                ></div>
              )}
            </div>
            <div className={s.label}>
              <Name className={s.inputIcon} />
              <Field
                className={s.input}
                name="username"
                placeholder="First name"
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
          </Form>
        )}
      </Formik>
    </div>
  );
};

// import { basicSchema } from '../schema';
// const onSubmit = async (values, actions) => {
//   console.log(values);
//   console.log(actions);
//   await new Promise(resolve => setTimeout(resolve, 1000));
//   actions.resetForm();
// };

// const onChange = async (values, actions) => {
//   console.log(values);
//   console.log(actions);
//   // await new Promise(resolve => setTimeout(resolve, 1000));
//   // actions.resetForm();
// };
// export const SignUp = () => {
//   const {
//     values,
//     errors,
//     touched,
//     isSubmitting,
//     handleBlur,
//     handleChange,
//     handleSubmit,
//   } = useFormik({
//     initialValues: {
//       firstname: '',
//       lastname: '',
//       email: '',
//       age: '',
//       password: '',
//       confirmPassword: '',
//     },
//     validationSchema: SignupSchema,
//     onSubmit,
//     onChange,
//   });
//   console.log(errors);
// onChange().then(r => console.log(r));
// console.log(values);

// return (
//   <form onSubmit={handleSubmit} autoComplete="off">
//     <label htmlFor="firstname">First Name</label>
//     <input
//       value={values.firstname}
//       onChange={handleChange}
//       id="firstname"
//       type="firstname"
//       placeholder="Enter First Name"
//       onBlur={handleBlur}
//       className={errors.firstname && touched.firstname ? 'input-error' : ''}
//     />
//     {errors.firstname && touched.firstname && (
//       <p className="error">{errors.firstname}</p>
//     )}
//     <label htmlFor="lastname">Last Name</label>
//     <input
//       value={values.lastname}
//       onChange={handleChange}
//       id="lastname"
//       type="lastname"
//       placeholder="Enter Last Name"
//       onBlur={handleBlur}
// className={errors.email && touched.email ? "input-error" : ""}
//       />
//       {errors.lastname && touched.lastname && (
//         <p className="error">{errors.lastname}</p>
//       )}
//       <label htmlFor="email">Email</label>
//       <input
//         value={values.email}
//         onChange={handleChange}
//         id="email"
//         type="email"
//         placeholder="Enter your email"
//         onBlur={handleBlur}
//         className={errors.email && touched.email ? 'input-error' : ''}
//       />
//       {errors.email && touched.email && <p className="error">{errors.email}</p>}
//       <label htmlFor="age">Age</label>
//       <input
//         id="age"
//         type="number"
//         placeholder="Enter your age"
//         value={values.age}
//         onChange={handleChange}
//         onBlur={handleBlur}
//         className={errors.age && touched.age ? 'input-error' : ''}
//       />
//       {errors.age && touched.age && <p className="error">{errors.age}</p>}
//       <label htmlFor="password">Password</label>
//       <input
//         id="password"
//         type="password"
//         placeholder="Enter your password"
//         value={values.password}
//         onChange={handleChange}
//         onBlur={handleBlur}
//         className={errors.password && touched.password ? 'input-error' : ''}
//       />
//       {errors.password && touched.password && (
//         <p className="error">{errors.password}</p>
//       )}
//       <label htmlFor="confirmPassword">Confirm Password</label>
//       <input
//         id="confirmPassword"
//         type="password"
//         placeholder="Confirm password"
//         value={values.confirmPassword}
//         onChange={handleChange}
//         onBlur={handleBlur}
//         className={
//           errors.confirmPassword && touched.confirmPassword ? 'input-error' : ''
//         }
//       />
//       {errors.confirmPassword && touched.confirmPassword && (
//         <p className="error">{errors.confirmPassword}</p>
//       )}
//       <button disabled={isSubmitting} type="submit">
//         Submit
//       </button>
//     </form>
//   );
// };
// export default SignUp;
