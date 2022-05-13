import styledComponents from 'styled-components';

export const StyledHeader = styledComponents.div`
    color: #fff;
    height: 40vh;
    width: 100vw;
    background-image: ${({ bg }) => bg};
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  
`;

export const StyledHeaderText = styledComponents.div`
    text-align: center;
    padding-top: 10vh;
    letter-spacing: 0.5px; 
`;
