import React from "react";
import Container from "react-bootstrap/Container";
import check from "../static/assets/image/icon-check.svg";

export const Banner = () => {
  return (
    <div className="banner_navigation">
      <Container>
        <span className="sub_title">Hospedagem de Sites</span>
        <h1 className="title">
          Tenha uma hospedagem de sites estável e evite perder visitantes
          diariamente
        </h1>
        <div className="items_banner">
          <span className="item_banner">
          <p><img className="check" src={check} alt="check" />
            99,9% de disponibilidade: seu site sempre no ar</p>
          </span>
          <span className="item_banner">
          <p>
            <span>
            <img className="check" src={check} alt="check" />
             Suporte 24h, todos os dias
            </span>
            <span>
            <img className="check" src={check} alt="check" />
            Painel de Controle cPanel
            </span>
            </p>
          </span>
        </div>
      </Container>
    </div>
  );
};
