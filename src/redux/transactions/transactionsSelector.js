import { createSelector } from '@reduxjs/toolkit';
export const selectedFilter = state => state.filter.filter;
export const selectContacts = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;

export const selectRenderContacts = createSelector(
  [selectContacts, selectedFilter],
  (contacts, filter) =>
    contacts.filter(({ name }) => 
      name.toLowerCase().includes(filter.toLowerCase())
    )
);
