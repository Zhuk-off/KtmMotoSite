import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '../ElementPage/Button';
import { Header } from '../ElementPage/Header';
import { PageNotFound } from './PageNotFound';
import {
  StyledMotoCard,
  StyledMotoCardContent,
  StyledMotoCardDescription,
  StyledMotoCardHeader,
  StyledMotoCardHeaderContent,
  StyledMotoCardName,
  StyledMotoCardPic,
  StyledMotoCardPrice,
  StyledMotoCardPricearea,
} from '../styles/Pages.styled/MotoCard.styled';

const MotoCard = (props) => {
  const { id } = useParams();
  const moto = props.moto.find((moto) => moto.id === id);

  if (moto !== undefined) {
    return (
      <div>
        <Header background={moto.background} />
        <StyledMotoCard>
          <StyledMotoCardHeader>
            <StyledMotoCardHeaderContent>
              <StyledMotoCardName>
                <h1>{moto.name}</h1>
              </StyledMotoCardName>
              <StyledMotoCardPricearea>
                <StyledMotoCardPrice>
                  <h2>{moto.price}</h2>
                </StyledMotoCardPrice>
                <Link
                  key={id}
                  to={`/${moto.category}/${moto.id}/order`}
                  moto={moto}
                >
                  <Button title={'Заказать'} />
                </Link>
              </StyledMotoCardPricearea>
            </StyledMotoCardHeaderContent>
          </StyledMotoCardHeader>
          <StyledMotoCardContent>
            <StyledMotoCardPic>
              <img src={moto.photolink} alt={moto.name} />
            </StyledMotoCardPic>
            <StyledMotoCardDescription>
              <h2>{moto.titleCard}</h2>
              <p>{moto.descriptionMoto}</p>
            </StyledMotoCardDescription>
          </StyledMotoCardContent>
          <Link to={`/${moto.category}`}>
            <Button title={'Вернуться назад - Посмотреть другие модели KTM'} />
          </Link>
        </StyledMotoCard>
      </div>
    );
  } else {
    return (
      <React.Fragment>
        <PageNotFound />;
      </React.Fragment>
    );
  }
};

export { MotoCard };
