import React, { useState, useCallback } from 'react';
import './Navbar.scss';
import {motion} from 'framer-motion'

export default function NavItem(props) {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  
  const onMouseEnter = () => {
    if (window.innerWidth < 300) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 300) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  
  const closeMobileMenu = useCallback(() => {
    setClick(false);
  }, []);

  

  return (
    <motion.li
      className='nav_item'
      key={props.title}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <a
        href={props.url}
        onClick={closeMobileMenu}
        className='nav_links'
      >
        <span className='link_icon'>{props.icon}</span>
        <span className='link_title'>{props.title}</span>
      </a>
      {dropdown && props.children}
      {click && props.children}
    </motion.li>
  );
}
