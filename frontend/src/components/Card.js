import React from 'react';
import plan from '../static/assets/image/plan.svg';
import info from '../static/assets/image/info.svg';


const formatter = val => new Intl.NumberFormat([], { style: 'currency', currency: 'BRL' }).format(val)


const Card = ({item}) => {

  const discount = item.priceOrder - ( (item.priceOrder*40)/100 )
  const totalDiscount = (item.priceOrder*40)/100
  return (
    <>
      <div className="card_body">
        <div className="card_content">
          <div className="card_item">
            <div className="card_item_content">
              <img src={plan} alt="Plano M" className="plan" />
              <h2>Plano M</h2>
            </div>
          </div>

          <div className="card_item">
            <div className="card_item_content">
            <p className="item_values" >
              
              <span className="item_value_old">R$ {formatter(item.priceOrder)}</span>
              {' '}
              <span className="item_value_new">R$ {formatter(item.priceOrder*40/100)}</span> 
             
              <div className="item_text">equivalente a </div>

               <div className="item_monthly"> 
               R$ <span className="item_value_monthly">{formatter(totalDiscount/item.months)}</span>/mês*
               </div>  
              </p>
              

              <button className="btn_buy">Contrate Agora</button>
              
              <p>
                <div className="item_domain">
                  1 ano de Domínio Grátis{' '}
                  <img src={info} alt="info" className="info" />
                </div>
              </p>
              <p>
                <div className="item_discount">
                  <span className="item_phrase_discount" >economize R$ {formatter(discount)}</span>
                <span className="item_badge">40% OFF</span>
                </div>
                
              </p>
            </div>
          </div>
          <div className="card_item">
            <div className="card_item_list">
              <ul>
                <li className="list_dashed">Sites Ilimitados</li>
                <li>
                  <strong>100 GB</strong> de Armazenamento
                </li>
                <li>
                  Contas de E-mail <strong>Ilimitadas</strong>
                </li>
                <li className="list_underline">
                  Criador de Sites <strong>Grátis</strong>{' '}
                </li>
                <li>
                  Certificado SSL <strong>Grátis</strong> (https)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
