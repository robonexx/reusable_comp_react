import React from 'react'
import QA from '../components/Q&A/QA';
import styles from '../styles/App.module.css'

  

export default function Components() {
  return (
      <div className={styles.main}>
            <h2>Q & A component</h2>
            {/* So here we are using the QA compoenent in map function looping thru the array of objects with q's and a's that are then sent as props to the components */}
            {qa.map(({ id, q, a }) => (
              <li key={id}>
                <QA title={q} desc={a} />
              </li>
            ))}
    </div>
  )
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