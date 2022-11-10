import { createSlice } from '@reduxjs/toolkit';

const contactsFilterSlice = createSlice({
  name: 'filter',
  initialState: { filter: '' },
  reducers: {
    onChange(state, { payload }) {
      state.filter = payload;
    },
  },
});

export const { onChange } = contactsFilterSlice.actions;
export const filterReducer = contactsFilterSlice.reducer;