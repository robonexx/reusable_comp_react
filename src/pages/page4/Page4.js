import React, { useState } from 'react';
import Button from '../../components/buttons/Button';
// styles
import styles from './Page4.module.css';

const FIELDS = {
  NAME: 'name',
  PASSWORD: 'password',
  EMAIL: 'email',
  CITY: 'city',
  COUNTRY: 'country',
  BRAND: 'brand',
  MODEL: 'model',
  SIZE: 'size',
};

export default function Page4() {
  return (
    <div className={styles.page4}>
      <h2>Form components</h2>
      <div className={styles.content}>
        <form className={styles.form}>
          <p>
            Hi my name is{' '}
            <input name={FIELDS.NAME} label='Name' placeholder='Your name' />.
            My email is{' '}
            <input name={FIELDS.EMAIL} label='Email' placeholder='Your email' />
            . I'm from{' '}
            <input name={FIELDS.CITY} label='City' placeholder='City' />,{'  '}
            <input
              name={FIELDS.Country}
              label='Country'
              placeholder='country'
            />
            <br />
            I'm looking for{' '}
            <input name={FIELDS.BRAND} label='Brand' placeholder='brand' />{' '}
            model is{' '}
            <input name={FIELDS.MODEL} label='Model' placeholder='shoe model' />
            <br />
            My shoe size is{' '}
            <input name={FIELDS.SIZE} label='Size' placeholder='shoe size' /> &
            I want to know about the latest drops coming in with my shoe size.
          </p>
          <Button variant='light'>Create account</Button>
        </form>
      </div>
    </div>
  );
}

/* 
<input
            name={FIELDS.PASSWORD}
            label='Password'
            placeholder='Enter password'
          />
*/
