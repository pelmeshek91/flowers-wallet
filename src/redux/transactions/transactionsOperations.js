import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// axios.defaults.baseURL = "https://connections-api.herokuapp.com";

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios('/contacts');
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const deleteContact = createAsyncThunk(
  'contacts/deleteContacts',
  async (contactId, { rejectWithValue }) => {
    try {
      await axios.delete(`/contacts/${contactId}`);
      return contactId;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const addContact = createAsyncThunk(
  'contacts/addContacts',
  async (contact, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/contacts', contact);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const updateContact = createAsyncThunk(
  'contacts/updateContact',
  async ({ id, ...contact }, { rejectWithValue }) => {
    try {
      const newContact = await axios.patch(`/contacts/${id}`, contact);
      console.log(newContact);
      return newContact.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
