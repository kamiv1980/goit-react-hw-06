/** @format */

import { createStore, combineReducers } from 'redux';
import { contactsReducer } from './contacts/reducer';

const rootReducer = combineReducers({ contacts: contactsReducer });
export const store = createStore(rootReducer);
