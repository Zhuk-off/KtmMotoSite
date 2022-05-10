import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button } from '../ElementPage/Button';
import './PageNotFound.css';

const PageNotFound = () => {
  const pages = useSelector((state) => state.moto.page);
  const lengthForDisplayToStart = pages.length;

  if (lengthForDisplayToStart === 0) {
    return (
      <div>
        <h1>Загрузка ...</h1>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Страница не найдена</h1>
        <Link to="/">
          <Button title="Назад на главную" />
        </Link>
      </div>
    );
  }
};

export { PageNotFound };
