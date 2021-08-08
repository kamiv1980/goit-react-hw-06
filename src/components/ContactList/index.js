/** @format */

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './styles.module.css';
import { deleteContact, newEditItem, newModal } from '../../services/contacts/actions';
import { selContacts, selFilter } from '../../services/contacts/selectors';

export function ContactList() {
  const contacts = useSelector(selContacts);
  const dispatch = useDispatch();
  const filter = useSelector(selFilter);

  const visibleList = (filter, contacts) => {
    return contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()));
  };

  const filteredContacts = visibleList(filter, contacts);

  const onDeleteBtn = (id) => dispatch(deleteContact(id));
  const onEditBtn = (item) => {
    dispatch(newEditItem(item));
    dispatch(newModal(true));
  };

  return (
    <ul className={styles.list}>
      {filteredContacts.map((item) => (
        <li className={styles.item} key={item.id}>
          <p>
            {item.name}: {item.number}
          </p>
          <button className={styles.btnDelete} type="button" onClick={(evt) => onDeleteBtn(item.id)}>
            Delete
          </button>
          <button className={styles.btnDelete} type="button" onClick={() => onEditBtn(item)}>
            Edit
          </button>
        </li>
      ))}
    </ul>
  );
}
