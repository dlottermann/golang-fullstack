import React from 'react';
import Container from 'react-bootstrap/Container';
import hostgator from '../static/assets/image/hostgator-logo.svg'

export const Header = () => {
  return (
    <Container>
      <div className="header_navigation">
        <img width={16} height={16} className="logo" src={hostgator} alt="Hostgator" />
      </div>
    </Container>
  );
};
