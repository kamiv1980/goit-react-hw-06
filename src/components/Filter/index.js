/** @format */

import styles from './styles.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selFilter } from '../../services/contacts/selectors';
import { newFilter } from '../../services/contacts/actions';

export function Filter() {
  const filter = useSelector(selFilter);
  const dispatch = useDispatch();
  const onChangeFilter = (evt) => dispatch(newFilter(evt.currentTarget.value));

  return (
    <label className={styles.label}>
      Find contacts by name:
      <input className={styles.input} type="text" value={filter} onChange={onChangeFilter} />
    </label>
  );
}
