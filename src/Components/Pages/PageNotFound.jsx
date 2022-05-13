import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button } from '../ElementPage/Button';
import { StyledPageNotFound } from '../styles/Pages.styled/PageNotFound.styled';

const PageNotFound = () => {
  const pages = useSelector((state) => state.moto.page);
  const lengthForDisplayToStart = pages.length;

  if (lengthForDisplayToStart === 0) {
    return (
      <div>
        <StyledPageNotFound>Загрузка ...</StyledPageNotFound>
      </div>
    );
  } else {
    return (
      <div>
        <StyledPageNotFound>Страница не найдена</StyledPageNotFound>
        <Link to="/">
          <Button title="Назад на главную" />
        </Link>
      </div>
    );
  }
};

export { PageNotFound };
