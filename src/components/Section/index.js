/** @format */

import React from 'react';
import styles from './styles.module.css';

export const Section = ({ title, children }) => {
  return (
    <>
      <section className={styles.section}>
        <h3 className={styles.title}>{title}</h3>
        {children}
      </section>
    </>
  );
};
