import {useState} from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/nav/Nav';
import styles from './styles/App.module.css';
import Home from './pages/Home';
import Components from './pages/Components';
import Page3 from './pages/page3/Page3';
import Page4 from './pages/page4/Page4';
import NavButton from './components/NavBar2/NavButton';
import NavBar from './components/NavBar2/Navbar';


function App() {
  const [menu, setMenu] = useState(false)

  const handleClick = () => {
    setMenu(!menu)
    console.log('clicked')
  }
  return (
    <div className={styles.App}>
      {!menu ? <Nav /> :
      <NavBar /> }
      <NavButton handleClick={handleClick} menu={menu}/>
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
