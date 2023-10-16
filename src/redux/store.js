


import { configureStore } from '@reduxjs/toolkit';
// import contactReducer from './contactSlice';
import { contactsReducer } from './contactSlice';



export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
  
});







