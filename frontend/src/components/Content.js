import React, { useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";

import Card from "./Card";
import ReactLoading from "react-loading";

import { getPlan } from "../services";

export const Content = () => {
  const [loading, setLoading] = useState(true);
  const [item, setItem] = useState({});
  //initialize Plan M
  const [selected, setSelected] = useState({
    description: "triennially",
    months: 36,
    priceRenew: "764.22",
    priceOrder: "764.22"
  });

  useEffect(() => {
    const fetchData = async () => {
      // Plano M  = ID 6
      await getPlan(6).then((data) => {
        setItem(data);
        setLoading(false);
      });
    };
    fetchData();
  }, []);


  const handleItem = value => {
    const it = item.product[0].cycle.filter(i => i.months === value)
    setSelected(it[0])
  }


  return (
    <>
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
          <span>
            <div className="box_choose">
              <RadioGroup row aria-label="position" name="position" defaultValue="top">
                <FormControlLabel
                  checked = {selected.months === 36}
                  value="36"
                  control={<Radio color="primary" />}
                  label="3 anos"
                  onChange={ () => handleItem(36) }
                />
                <FormControlLabel
                 checked = {selected.months === 12}
                  value="12"
                  control={<Radio color="primary" />}
                  label="1 ano"
                  onChange={ () => handleItem(12) }
                />
                <FormControlLabel
                  checked = {selected.months === 1}
                  value="1"
                  control={<Radio color="primary" />}
                  label="1 mês"
                  onChange={ () => handleItem(1) }
                />
              </RadioGroup>
            </div>

          </span>

          <div className="content_container">
            <Card item={selected} />
          </div>
        </Container>
      )}
    </>
  );
};
