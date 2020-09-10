import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';

import Card from './Card';
import ReactLoading from 'react-loading';

import { getPlans } from "../services";

export const Content = () => {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      await getPlans().then((data) => {
        setItems(data)
        setLoading(false)
      });
    };
    fetchData();
  }, []);



  return (
    <>
    {console.log(items)}
      {loading ? (
        <ReactLoading
          type="spin"
          width={45}
          className="loader"
          color="#1d5297"
        />
      ) : (
        <Container>
          <p className="payment_choose">Quero pagar a cada:</p>
           {/*<Form>
            <div className="box_choose">
              <Form.Check
                custom
                inline
                label="3 anos"
                type="radio"
                name="choice"
                id={`choice-1`}
                className="box_item"
                value="36"
                onChange={(e) => {}}
              />
              <Form.Check
                custom
                inline
                label="1 ano"
                type="radio"
                name="choice"
                id={`choice-2`}
                className="box_item"
                value="12"
                onChange={(e) => {}}
              />
              <Form.Check
                custom
                inline
                label="1 mês"
                type="radio"
                name="choice"
                id={`choice-3`}
                className="box_item"
                value="1"
                onChange={(e) => {}}
              />
            </div>
          </Form> */}

          <div className="content_container">
            <Card />
          </div>
        </Container>
      )}
    </>
  );
};
