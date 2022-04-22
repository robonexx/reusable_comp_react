import React from 'react';
import { Link } from 'react-router-dom';

// styles
import styles from '../../styles/Nav.module.css';

const navItems = [
  {
    title: 'home',
    url: '/',
  },
  {
    title: 'components',
    url: '/components',
  },
  {
    title: 'contact',
    url: '/contact',
  },
];

export default function Nav() {
  return (
    <>
      <nav className={styles.nav}>
        <ul className={styles.nav_menu}>
          {navItems.map(({ title, url }) => (
            <li className={styles.nav_item} key={title}>
              <Link to={url} className={styles.nav_links}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
