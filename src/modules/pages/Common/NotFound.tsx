import React from 'react';
import notFoundImage from 'assets/static/notFound.jpg';
import { Description, NavigationButton, Title } from 'modules/shared';
import { routes } from 'appConstants';

const NotFound: React.FC = () => {
  return (
    <div className="error-page">
      <img className="error-image" src={notFoundImage}></img>
      <Title>404</Title>
      <Description>We're sorry, requested page could not be found.</Description>
      <NavigationButton className="button-primary" to={routes.dashboard.applications}>
        <b>HOME PAGE</b>
      </NavigationButton>
    </div>
  );
};

export default NotFound;
