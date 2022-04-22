import React, {useState} from 'react';
// hook
/* import { useToggle } from '../../hooks/useToggle'; */
// icons
import { FiArrowDownCircle, FiArrowUpCircle } from 'react-icons/fi';


// styles
import styles from '../../styles/QA.module.css';

export default function QA(props) {
  // using the toggle  hook
  /* const { toggle: open, toggler: toggleOpen } = useToggle(); */
  const [toggle, setToggle] = useState(false)

  const handleToggle = () => {
    setToggle(!toggle)
  }

  //  destructuring props 
  const { title, desc } = props;

  // creating the title function for question
  const Title = () => {
    return (
      <button onClick={handleToggle}>
        {title}
        <span>{toggle ? <FiArrowUpCircle /> : <FiArrowDownCircle />}</span>
      </button>
    );
  };
  // creating the desc function for questions
  const Desc = () => {
    return <>{toggle && <div className={styles.answer}>{desc}</div>}</>;
  };

  return (
    <div className={styles.qa_wrapper}>
      <div className={styles.qa}>
        <Title title={`question`} />
        <Desc desc={`Answer`} />
      </div>
    </div>
  );
}
