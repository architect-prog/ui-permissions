import React from 'react';
import internalServerErrorImage from 'assets/static/internalServerError.jpg';
import { Description, NavigationButton, Title } from 'modules/shared';
import { routes } from 'appConstants';

const InternalServerError: React.FC = () => {
  return (
    <div className="error-page">
      <img className="error-image" src={internalServerErrorImage}></img>
      <Title>500</Title>
      <Description>We're sorry, something get wrong on server side.</Description>
      <NavigationButton className="button-primary" to={routes.dashboard.applications}>
        <b className="error-page-button-text">HOME PAGE</b>
      </NavigationButton>
    </div>
  );
};

export default InternalServerError;
