import React from 'react'
import NavBar from '../../components/NavBar2/Navbar'

// styles
import styles from './Page4.module.css'

export default function Page4() {
  return (
    <div className={styles.page4}>
        <h2>Some buttons and such</h2>
        <div className={styles.content}>
           <NavBar />
        </div>
    </div>
  )
}
