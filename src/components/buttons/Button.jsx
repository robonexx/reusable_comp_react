import styles from './Buttons.module.scss';

const Button = ({
  as: Btn = 'button',
  children,
  variant,
  onClick = () => {},
}) => {
  return (
    <Btn onClick={onClick} className={`${styles.btn} ${styles[variant]}`}>
      {children}
    </Btn>
  );
};

export default Button;
