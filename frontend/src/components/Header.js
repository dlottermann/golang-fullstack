import React from 'react';
import Container from '@material-ui/core/Container';
import hostgator from '../static/assets/image/hostgator-logo.svg';

export const Header = () => {
  return (
    <div className="header_navigation">
      <Container>
        <div>
          <img
            width={16}
            height={16}
            className="logo"
            src={hostgator}
            alt="Hostgator"
          />
        </div>
      </Container>
    </div>
  );
};
