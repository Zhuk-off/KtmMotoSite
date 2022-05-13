import React from 'react';
import { StyledImput } from '../styles/ElementPages.styled/Input.styled';

const Input = (props) => {
  return (
    <StyledImput>
      <input
        type={props.type || 'text'}
        id={props.id || ''}
        placeholder={props.placeholder || ''}
        name={props.name || ''}
        value={props.value}
        onChange={props.onChange}
      />
      <span>{props.errorMessage || 'Введите верное значение'}</span>
    </StyledImput>
  );
};

export { Input };
