/** @format */
import { actionTypes, newEditItem } from './actions';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  items: [
    { id: uuidv4(), name: 'Rosie Simpson', number: '459-12-56' },
    { id: uuidv4(), name: 'Hermione Kline', number: '443-89-12' },
    { id: uuidv4(), name: 'Eden Clements', number: '645-17-79' },
    { id: uuidv4(), name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: '',
  modal: false,
  editItem: { id: '', name: '', number: '' },
};

export function contactsReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.ADD_CONTACT:
      return { ...state, items: [...state.items, action.payload] };

    case actionTypes.DELETE_CONTACT:
      return { ...state, items: state.items.filter((contact) => contact.id !== action.payload.id) };

    case actionTypes.NEW_FILTER:
      return {
        ...state,
        filter: action.payload.filter,
      };

    case actionTypes.NEW_MODAL:
      return {
        ...state,
        modal: (state.modal = action.payload.modal),
      };

    case actionTypes.NEW_ITEM:
      return {
        ...state,
        editItem: action.payload.editItem,
      };

    case actionTypes.EDIT_CONTACT:
      return {
        ...state,
        items: state.items.map((contact) =>
          contact.id === action.payload.id
            ? { ...contact, name: action.payload.name, number: action.payload.number }
            : contact,
        ),
      };

    default:
      return state;
  }
}
