import styledComponents from 'styled-components';

export const StyledMotoCard = styledComponents.div`
   margin: 0 15% 0 15%;
   border-bottom: 1px solid #ccc;
`;

export const StyledMotoCardHeader = styledComponents.div`
 padding: 50px 0 30px 0;
 border-bottom: 1px solid #ccc;
`;

export const StyledMotoCardHeaderContent = styledComponents.div`
 display: flex;
    justify-content: space-between;
`;

export const StyledMotoCardName = styledComponents.div`
 h1 {
    font-weight: 500;
    height: 100%;
`;

export const StyledMotoCardPricearea = styledComponents.div`
 display: flex;
`;

export const StyledMotoCardPrice = styledComponents.div`
 h2 {
    height: 100%;
    font-weight: 500;
    padding: 20px 20px 0 20px;
    letter-spacing: 0.8px;
  }
`;

export const StyledMotoCardContent = styledComponents.div`
 display: flex;
 justify-content: space-between;
 padding-top: 30px;
 margin-bottom: 40px;
`;

export const StyledMotoCardPic = styledComponents.div`
 width: 66%;
& img {
    width: 100%;
    height: auto;
  }
`;

export const StyledMotoCardDescription = styledComponents.div`
 width: 33%;
 & h2 {
    font-size: 300%;
    padding-bottom: 10px;
  }
 & p {
    font-size: 110%;
    line-height: 1.5;
    color: #888;
  }
`;
