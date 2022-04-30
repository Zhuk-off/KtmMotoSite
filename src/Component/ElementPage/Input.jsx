import React from 'react';
import './Input.css';

const Input = (props) => {
  const cls = ['Input'];
  //   console.log(cls, props);

  function isInvalid(props) {
    return !props.valid && props.souldValidate && props.touched;
  }

  // if (isInvalid(props)) {
  //   cls.push('invalid');
  // }
  console.log('Input props = ', props);

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

      {/* {isInvalid(props) ? (
        <span>{props.errorMessage || 'Введите верное значение'}</span>
      ) : null} */}
    </div>
  );
};

export { Input };
