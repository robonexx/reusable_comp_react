// styles
import styles from './Button.module.css'

const Button = ({
  as: Btn = 'button',
  children,
  variant = 'light',
  onClick= () => {},
    
}) => {
  return (
    <Btn onClick={onClick} className={`${styles.button} ${styles[variant]}`}>
        {children}
    </Btn>
  )
}

export default Button
