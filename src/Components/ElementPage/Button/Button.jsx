import styles from './Button.module.scss';

const Button = (props) => {
  return (
    <div className={styles.order}>
      <h3>{props.title}</h3>
    </div>
  );
};

export { Button };
