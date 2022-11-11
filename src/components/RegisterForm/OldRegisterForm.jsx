// import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { registration } from '../../redux/auth/authOperations';
// import { AuthButton } from '../Button/Button';

// import s from './RegisterForm.module.scss';

// export const RegisterForm = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const dispatch = useDispatch();

//   const handleChange = ({ target: { name, value } }) => {
//     switch (name) {
//       case 'name':
//         setName(value);
//         break;
//       case 'email':
//         setEmail(value);
//         break;
//       case 'password':
//         setPassword(value);
//         break;
//       default:
//         break;
//     }
//   };
//   const handleSubmit = e => {
//     e.preventDefault();
//     dispatch(registration({ name, email, password }));
//     setName('');
//     setEmail('');
//     setPassword('');
//   };
//   return (
//     <form className={s.form} onSubmit={handleSubmit}>
//       <label className={s.label}>
//         Name:
//         <input
//           className={s.input}
//           type="text"
//           name="name"
//           value={name}
//           onChange={handleChange}
//         />
//       </label>
//       <label className={s.label}>
//         Email:
//         <input
//           className={s.input}
//           type="email"
//           name="email"
//           value={email}
//           onChange={handleChange}
//         />
//       </label>
//       <label className={s.label}>
//         Password:
//         <input
//           className={s.input}
//           type="password"
//           name="password"
//           value={password}
//           onChange={handleChange}
//         />
//       </label>
//       <AuthButton text={'Register'} />
//     </form>
//   );
// };
