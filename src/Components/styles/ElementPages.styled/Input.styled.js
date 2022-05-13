import styledComponents from 'styled-components';

export const StyledImput = styledComponents.div`

    margin: 0px 10px 0px 10px;
    padding-buttoom: 10px ;
  
  & input {
    font-size: larger;
    color: #888;
    border: 1px solid #ccc;
  
    padding: 9px;
    width: 100%;
    box-sizing: border-box;
    transition: all 300ms ease-in-out;
  }
  & input:focus {
    border: 1px solid #000;
  }
  
  .Input.invalid input {
    border: 1px solid red;
    margin-bottom: 0;
  }
  & span {
    display: block;
    visibility: hidden;
    padding-left: 10px;
    margin-bottom: 5px;
  }
  .Input.invalid span {
    color: red;
    visibility: hidden;
  }
  
  
`;
