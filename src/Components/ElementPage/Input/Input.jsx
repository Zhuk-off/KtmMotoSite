import styles from './Input.module.scss';

const Input = (props) => {
  const cls = styles.Input;

  return (
    <div className={cls}>
      <input
        type={props.type || 'text'}
        id={props.id || ''}
        placeholder={props.placeholder || ''}
        name={props.name || ''}
        value={props.value}
        onChange={props.onChange}
      />
      <span>{props.errorMessage || 'Введите верное значение'}</span>
    </div>
  );
};

export { Input };
