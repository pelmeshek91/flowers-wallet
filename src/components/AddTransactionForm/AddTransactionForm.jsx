import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/contactsOperations';
import { selectContacts } from 'redux/contacts/contactsSelector';

import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import s from './Form.module.css';

export const Form = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'number':
        setNumber(value);
        break;

      case 'name':
        setName(value);
        break;

      default:
        return;
    }
  };
  const oldContacts = useSelector(selectContacts);

  const handleSubmit = event => {
    event.preventDefault();

    const newContactData = {
      name,
      number,
    };

    if (
      oldContacts.some(
        contact =>
          contact.name.toLowerCase() === newContactData.name.toLowerCase()
      )
    ) {
      alert(`contact with ${newContactData.name} has already been created`);
      return;
    }

    dispatch(addContact(newContactData));
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit} className={s.formMain}>
      <TextField
        id="outlined-basic"
        label="Name"
        variant="outlined"
        type="text"
        name="name"
        value={name}
        onChange={handleChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />

      <TextField
        id="outlined-basic2"
        label="Number"
        variant="outlined"
        type="tel"
        name="number"
        value={number}
        onChange={handleChange}
        autoComplete="false"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="  number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />

      <Button type="submit" variant="outlined" margin="0">
        Add contact
      </Button>
    </form>
  );
};
