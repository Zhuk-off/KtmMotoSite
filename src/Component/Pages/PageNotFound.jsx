import { Link } from 'react-router-dom';
import { Button } from '../ElementPage/Button';
import './PageNotFound.css';

const PageNotFound = (props) => {
  return (
    <div>
      <h1>Страница не найдена</h1>
      <Link to="/">
        <Button title="Назад на главную" />
      </Link>
    </div>
  );
};

export { PageNotFound };
