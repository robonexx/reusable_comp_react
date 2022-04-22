import React, { useState } from 'react';
import QA from '../components/Q&A/QA';
import Slider from '../components/Slider/Slider';
import Modal from '../components/modal/Modal';

// styles & motion
import { motion } from 'framer-motion';
import styles from '../styles/App.module.css';

const ModalContent = () => (
  <>
    <div
      style={{
        width: '400px',
        height: '300px',
        background: 'transparent',
        color: '#f8f8f8',
        display: 'block',
      }}
    >
      <h1>Some modal content</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit eligendi
        ducimus libero assumenda incidunt est nulla a quaerat blanditiis
        pariatur.
      </p>
    </div>
  </>
);

export default function Components() {
  const [modalOpen, setModalOpen] = useState(false);

  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

  return (
    <div className={styles.components}>
      <div className={styles.components_wrapper}>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className='btn'
          onClick={() => (modalOpen ? close() : open())}
        >
          Open form
        </motion.button>
        {modalOpen && (
          <Modal
            modalOpen={modalOpen}
            handleClose={close}
            content={<ModalContent />}
          ></Modal>
        )}
      </div>
      <div className={styles.components_wrapper}>
        <h2>Q & A component</h2>
        {/* So here we are using the QA compoenent in map function looping thru the array of objects with q's and a's that are then sent as props to the components */}
        {qa.map(({ id, q, a }) => (
          <li key={id}>
            <QA title={q} desc={a} />
          </li>
        ))}
      </div>
      <div className={styles.components_wrapper}>
        <Slider />
      </div>
    </div>
  );
}

export const qa = [
  {
    q: 'What is HTML?',
    a: 'Hypertext Markup language, The markup language that is used to structure web content',
    id: 1,
  },
  {
    q: 'What is React?',
    a: 'A frontend libarary for building web applications, user interfaces UI, used for building components',
    id: 2,
  },
  {
    q: 'What is Javascript?',
    a: 'JavaScript is a scripting or programming language that allows you to implement complex features on web pages',
    id: 3,
  },
  {
    q: 'What is Css?',
    a: 'Cascading style sheets - i a language that is used to give styling to our HTML, web content.',
    id: 4,
  },
];
