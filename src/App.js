import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/nav/Nav';
import styles from './styles/App.module.css';
import Home from './pages/Home';
import Components from './pages/Components';
import Page3 from './pages/page3/Page3';
import Page4 from './pages/page4/Page4';

function App() {
  return (
    <div className={styles.App}>
      <Nav />
      <div className={styles.main}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/components' element={<Components />} />
          <Route path='/page3' element={<Page3 />} />
          <Route path='/page4' element={<Page4 />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
