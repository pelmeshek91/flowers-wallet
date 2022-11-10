import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateContact } from 'redux/contacts/contactsOperations';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import s from '../Form/Form.module.css';

export const UpdateForm = ({ contact, closeForm }) => {
  const [name, setName] = useState(contact.name);
  const [number, setNumber] = useState(contact.number);

  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(updateContact({ ...contact, name, number }));
    setName('');
    setNumber('');
    closeForm();
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
        Save
      </Button>
    </form>
   );
};
