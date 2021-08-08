/** @format */

import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from '../../services/contacts/actions';
import styles from './styles.module.css';
import { selContacts } from '../../services/contacts/selectors';

const pattern = {
  text: "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
  tel: '+?d{1,4}?[-.s]?(?d{1,3}?)?[-.s]?d{1,4}[-.s]?d{1,4}[-.s]?d{1,9}',
};

const Input = ({ label, type, name, value, onChange, title, required }) => {
  return (
    <label className={styles.label}>
      {label}:
      <input
        className={styles.input}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        pattern={pattern[type]}
        title={title}
        required={required}
      />
    </label>
  );
};

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(selContacts);
  const dispatch = useDispatch();
  const onAddContacts = (name, number) => dispatch(addContact(name, number));

  const nameTitle =
    "Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п.";
  const numberTitle =
    'Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +';

  const handleName = ({ currentTarget: { value } }) => setName(value);
  const handleNumber = ({ currentTarget: { value } }) => setNumber(value);
  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (contacts.find((contact) => contact.name.toLowerCase() === name.toLowerCase())) {
      alert(`${name} is already in contacts.`);
    } else {
      onAddContacts(name, number);
    }

    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <Input value={name} label="Name" type="text" name="name" title={nameTitle} required onChange={handleName} />
      <Input
        value={number}
        label="Number"
        type="tel"
        name="number"
        title={numberTitle}
        required
        onChange={handleNumber}
      />
      <button className={styles.button} type="submit">
        Add contact
      </button>
    </form>
  );
};
