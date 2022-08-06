import React from 'react'
import Button from '../../components/buttons/Button'

// styles
import styles from './Page3.module.css'

export default function Page3() {
  return (
    <div className={styles.page3}>
        <h2>Some buttons and such</h2>
        <div className={styles.content}>
            <Button variant='alt'>Some title</Button>
        </div>
    </div>
  )
}
