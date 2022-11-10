import React from 'react';
import { useDispatch } from 'react-redux';
import { onChange } from 'redux/contacts/contactsFilterSlice';
import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';
import s from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();
  const handleFilterContactsByName = e => {
    const { value } = e.target;
    dispatch(onChange(value.toLowerCase()));
  };
  return (
    <div className={s.inputFilter}>
      <TextField
        label="Find contact by name"
        variant="outlined"
        type="text"
        onChange={handleFilterContactsByName}
        autoComplete="false"
      />
    </div>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func,
};
