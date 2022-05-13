import {
  StyledHeader,
  StyledHeaderText,
} from '../styles/ElementPages.styled/Header.styled';

const Header = (props) => {
  let models;
  switch (props.length) {
    case 1:
      models = 'модель';
      break;
    case 2:
    case 3:
    case 4:
      models = 'модели';
      break;
    default:
      models = 'моделей';
      break;
  }
  if (props.length === undefined) {
    models = '';
  }
  return (
    <StyledHeader bg={'url(' + props.background + ')'}>
      <StyledHeaderText>
        <h1>{props.category} </h1>
        <h2>{props.description}</h2>
        <h3>
          {props.length} {models}
        </h3>
      </StyledHeaderText>
    </StyledHeader>
  );
};

export { Header };
