// redux/contactSlice.js
import { createSlice } from '@reduxjs/toolkit';

const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [
      { id:1,name: 'Rosie Simpson', number: '459-12-56' },
      { id:2,name: 'Hermione Kline', number: '443-89-12' },
      { id:3,name: 'Eden Clements', number: '645-17-79' },
      { id:4,name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  },
  reducers: {
    addContact: (state, action) => {
      state.contacts.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.contacts =  state.contacts.filter(contact => contact.id !== action.payload);
    },
    updateFilter: (state, action) => {
  return{...state,  filter:action.payload}
      
    },
  },
});

export const { addContact, deleteContact, updateFilter } = contactSlice.actions;
export default contactSlice.reducer;
