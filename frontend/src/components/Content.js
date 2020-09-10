import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Card from './Card';


const handleCheck = (e) => {
   var doc = document.getElementById("test");
   const inputs = doc.getElementsByTagName('input')

    for(let i=0; i< inputs.length;i++){
        console.log(inputs[i].checked)

        if(inputs[i].checked) {
            inputs[i].style.backgroundColor = 'red'
        }
    }


}


export const Content = () => {

  return (
    <Container id="test">
      <p className="payment_choose">Quero pagar a cada:</p>
      <Form>
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
            onChange={(e) => handleCheck(e)}
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
            onChange={(e) => handleCheck(e)}
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
            onChange={(e) => handleCheck(e)}
          />
        </div>
      </Form>

      <div className="content_container">
        <Card />
      </div>
    </Container>
  );
};
