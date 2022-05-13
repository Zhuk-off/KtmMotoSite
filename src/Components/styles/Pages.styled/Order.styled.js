import styledComponents from 'styled-components';

export const StyledOrder = styledComponents.div`
    height: 100%;
    border-bottom: 1px solid #ccc;
  `;

export const StyledOrderUserInfo = styledComponents.div`

    border: 1px solid #ccc;
    width: 400px;
    height: 400px;
    
  & > textarea {
    font-size: larger;
    color: #888;
    margin: 0 10px 10px 10px;
  
    border: 1px solid #ccc;
    width: 95%;
    padding: 10px;
    margin-bottom: 10px;
   &:focus {
    border: 1px solid #000;
  }
}
`;

export const StyledOrderBack = styledComponents.div`
    width: 40px;
    height: 40px;
    text-align: center;
    border-radius: 50%;
    font-weight: 700;
    font-size: 180%;
    color: rgb(255, 89, 0);
    cursor: pointer;
    padding: 3px 0 0 1px;
    border: 1px solid rgb(255, 89, 0);
    position: relative;
    left: 89%;
    top: 1%;
  
  &:hover {
    background-color: rgb(244, 244, 244);
  }
  &:active {
    background-color: rgb(225, 224, 224);
  }
  
  & > p {
    color: #888;
  }
`;

export const StyledOrderContainer = styledComponents.div`

    display: flex;
    justify-content: center;
    margin: 40px 0 40px;

    h2 {
    font-size: 200%;
    padding: 0 10px 10px 10px;
  }
`;

export const StyledOrderForm = styledComponents.form`
 button {
  font-family: 'Bebas Neue';
  background-color: rgb(255, 89, 0);
  color: white;
  padding: 10px;
  font-size: large;
  letter-spacing: 1px;
  width: 180px;
  margin: 0 10px 10px 10px;
  &:hover {
    background-color: rgb(255, 60, 0);
  }
}

`;