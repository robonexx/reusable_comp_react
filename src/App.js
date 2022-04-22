import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/nav/Nav';
import styles from './styles/App.module.css';
import Home from './pages/Home';
import Components from './pages/Components';

function App() {
  return (
    <div className={styles.App}>
      <Nav />
      <div className={styles.main}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/components' element={<Components />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
