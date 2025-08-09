import React from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import Home from './Home'; 

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-p4hyi2o0tnbuj212.us.auth0.com"
      clientId="LH1RcCKdjf7O7srCjL8GYY3J8zcmWxkV"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
      <Home />
    </Auth0Provider>
  </React.StrictMode>
);
