import styledComponents from 'styled-components';

export const StyledMotoBar = styledComponents.div`
display: flex;
width: 100%;
border-bottom: 1px solid #888;
justify-content: center;
margin-bottom: 50px;

& > div{
    padding: 24px 8px 20px;

& > a {
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  color: #888;
  text-decoration: none;
&:hover {
    border-bottom: 3px solid #f60;
    transition: all 0.1s;
  }
}
}
.active {
    border-bottom: 3px solid #f60;
}
`;
