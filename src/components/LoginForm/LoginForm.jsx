import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/authOperations';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import s from './LoginForm.module.css';

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
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
    dispatch(login({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <form className={s.loginForm} onSubmit={handleSubmit}>
      <TextField
        id="outlined-basic"
        label="Email:"
        variant="outlined"
        type="email"
        name="email"
        value={email}
        onChange={handleChange}
      />

      <TextField
        id="outlined-basic2"
        label="Password*"
        variant="outlined"
        type="password"
        name="password"
        value={password}
        onChange={handleChange}
        autoComplete="false"
      />

      <Button type="submit" variant="outlined">
        Login
      </Button>
    </form>
  );
};
