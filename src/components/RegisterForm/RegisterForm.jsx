import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/authOperations';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import s from './RegisterForm.module.css';

export const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <form className={s.registerForm} onSubmit={handleSubmit}>
      <TextField
        label="Name:"
        variant="outlined"
        type="text"
        name="name"
        value={name}
        onChange={handleChange}
      />

      <TextField
        label="Email:"
        variant="outlined"
        type="email"
        name="email"
        value={email}
        onChange={handleChange}
      />

      <TextField
        label="Password:"
        variant="outlined"
        type="password"
        name="password"
        value={password}
        onChange={handleChange}
      />

      <Button type="submit" variant="outlined">
        Register
      </Button>
    </form>
  );
};
