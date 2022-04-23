import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';



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
    title: 'page3',
    url: '/',
  },
  {
    title: 'page4',
    url: '/',
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
          {navItems.map(({ title, url }, i) => (
            <motion.li className={styles.nav_item} key={title}
              initial={{ opacity: 0, y: i % 2 === 0 ? -100 : 100 }}
              animate={{ opacity: 1, y: 0}}
              transition={{ duration: 1, delay: i * 0.2 }}
              whileHover={{
                scale: 1.2, rotate: 15,
                transition: { duration: 0.2 }
              }}
            >
              <Link to={url} className={styles.nav_links}>
                {title}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </>
  );
}
