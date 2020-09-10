import React from "react";
import plan from "../static/assets/image/plan.svg";

const Card = () => {
  return (
    <>
      <div className="card_body">
        <div className="card_content">
          <div className="card_item">
            <img src={plan} alt="Plano M" className="plan" />
            <h2>Plano M</h2>
          </div>
          
          <div className="card_item">
            R$ 647,64 R$ 453,35
            <br />
            <span>equivalente a </span>
            <p>
              R$ <span>12,59</span>/mês*
            </p>
            <br />
            <button className="btn_buy">Contrate Agora</button>
            1 ano de Domínio Grátis (icon)
            <br />
            economize R$ 174,48 (40% OFF)
            <br />
          </div>

          <div className="card_item">
            <ul>
              <li>Sites Ilimitados</li>
              <li>
                <strong>100 GB</strong> de Armazenamento
              </li>
              <li>
                Contas de E-mail <strong>Ilimitadas</strong>
              </li>
              <li>
                Criador de Sites <strong>Grátis</strong>{" "}
              </li>
              <li>
                Certificado SSL <strong>Grátis</strong> (https)
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
