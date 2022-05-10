import React from 'react';
import './Input.css';

const Input = (props) => {
  const cls = ['Input'];

  // function isInvalid(props) {
  //   return !props.valid && props.souldValidate && props.touched;
  // }

  return (
    <div className={cls.join(' ')}>
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
