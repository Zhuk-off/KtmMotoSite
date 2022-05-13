import styledComponents from 'styled-components';

export const StyledMoto = styledComponents.div`

    display: inline-block;
    width: 400px;
    text-align: center;
    padding: 2px;
    font-style: 24px;
    margin: 0 10px 50px 10px;
    cursor: pointer;

  & h2 {
    padding-top: 20px;
  }
  
  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    color: rgb(255, 89, 0);
    transition: 500ms;
  }
  
  &:active {
    box-shadow: none;
  }
  
  & img {
    width: 95%;
  }
  
`;
