import React from 'react';
import Container from 'react-bootstrap/Container';
import Media from 'react-bootstrap/Media';
import check from '../static/assets/image/icon-check.svg';

export const Banner = () => {
  return (
    <div className="banner_navigation">
      <Container>
        <span className="sub_title">Hospedagem de Sites</span>
        <h1 className="title">
          Tenha uma hospedagem de sites estável e evite perder visitantes
          diariamente
        </h1>
        <Media>
          <img className="check" src={check} alt="check" />
          <p>99,9% de disponibilidade: seu site sempre no ar</p>
        </Media>
        <Media>
          <img className="check" src={check} alt="check" />
          <p>Hospedagem de Sites Suporte 24h, todos os dias</p>
        </Media>
        <Media>
          <img className="check" src={check} alt="check" />
          <p>Painel de Controle cPanel</p>
        </Media>
      </Container>
    </div>
  );
};
