/** @format */
/** @format */
import { v4 as uuidv4 } from 'uuid';

export const actionTypes = {
  ADD_CONTACT: 'ADD_CONTACT',
  DELETE_CONTACT: 'DELETE_CONTACT',
  NEW_FILTER: 'NEW_FILTER',
  EDIT_CONTACT: 'EDIT_CONTACT',
  NEW_ITEM: 'NEW_ITEM',
  NEW_MODAL: 'NEW_MODAL',
};

export const addContact = (name, number) => ({
  type: actionTypes.ADD_CONTACT,
  payload: {
    id: uuidv4(),
    name,
    number,
  },
});

export const deleteContact = (id) => ({
  type: actionTypes.DELETE_CONTACT,
  payload: {
    id,
  },
});

export const newFilter = (filter) => ({
  type: actionTypes.NEW_FILTER,
  payload: {
    filter,
  },
});

export const newModal = (modal) => ({
  type: actionTypes.NEW_MODAL,
  payload: {
    modal,
  },
});

export const newEditItem = (editItem) => ({
  type: actionTypes.NEW_ITEM,
  payload: {
    editItem,
  },
});

export const editContact = (id, name, number) => ({
  type: actionTypes.EDIT_CONTACT,
  payload: {
    id,
    name,
    number,
  },
});
