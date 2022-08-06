import React from 'react';
import {motion} from 'framer-motion'

import './Navb.scss';

const list = [
  {
    title: 'THIS IS HIP-HOP',
    newtitle: '- & WE DON´T STOP'
  },
  {
    title: 'THE 80´s was rockin',
    newtitle: '- Dope'
  },
  {
    title: '1990´s was Fresh',
    newtitle: '- Golden Era!!!'
  },
  {
    title: '2000´s was Hot',
    newtitle: '- Yeah buddy'
  },
  {
    title: '2010 show stoppin',
    newtitle: '- Get it!'
  },
  {
    title: '2020... Cash is King',
    newtitle: '- Money, Money'
  },
];

export default function NavBar(props) {
  return (
    <div className='nav'>
      <div className='nbbg'>
       
      </div>
      <span className='custom_btn'>
        <a href='/'>Back</a>
      </span>
      <ul>
        {list.map((l, i) => (          
            <motion.li
            key={i}
             initial={{ opacity: 0, y: i % 2 === 0 ? -100 : 100 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 1, delay: i * 0.1 }}>
              <p  data-text={l.title  + l.newtitle}>{l.title}</p>
            </motion.li>
        ))}
       {/*  {props.children} */}
      </ul>
    </div>
  );
}
