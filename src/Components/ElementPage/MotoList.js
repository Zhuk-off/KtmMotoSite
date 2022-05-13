import { Link } from 'react-router-dom';
import { StyledMotoList } from '../styles/ElementPages.styled/MotoList.styled';
import { Moto } from './Moto';

const MotoList = (props) => {
  const moto = props.moto;

  return (
    <StyledMotoList>
      {moto.map((moto) => {
        return (
          <Link key={moto.id} to={`/${moto.category}/${moto.id}`} moto={moto}>
            <Moto name={moto.name} img={moto.photolink} />
          </Link>
        );
      })}
    </StyledMotoList>
  );
};

export { MotoList };
