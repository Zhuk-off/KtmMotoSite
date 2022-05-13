import styledComponents from 'styled-components';

export const StyledMotoList = styledComponents.div`
 text-align: center;
 
  a {
    color: black;
  }
  
  a,
  a:visited {
    text-decoration: none;
  }
  a:hover {
    text-decoration: none;
  }
  a:focus,
  a:active {
    outline: none;
  }
  
`;
