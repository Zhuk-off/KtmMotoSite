import { StyledMoto } from '../styles/ElementPages.styled/Moto.styled';
// import './Moto.css';

const Moto = (props) => {
  return (
    <StyledMoto>
      {/* <div className={'Moto'}> */}
      <h2>{props.name}</h2>
      <img className="Moto__imgMoto" src={props.img} alt={`${props.name}`} />
      {/* </div> */}
    </StyledMoto>
  );
};

export { Moto };
