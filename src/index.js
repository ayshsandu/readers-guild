import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AuthProvider } from "@asgardeo/auth-react";
import 'semantic-ui-css/semantic.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <AuthProvider
      config={ {
        signInRedirectURL: process.env.REACT_APP_SIGNIN_REDIRECT_URL,
        signOutRedirectURL: process.env.REACT_APP_SIGNOUT_REDIRECT_URL,
        clientID: process.env.REACT_APP_CLIENT_ID,
        baseUrl: process.env.REACT_APP_BASE_URL,
        scope: [
          "openid",
          "profile",
          process.env.REACT_APP_BOOKS_ADD,
          process.env.REACT_APP_BOOKS_DELETE,
          process.env.REACT_APP_BOOKS_LIST,
          process.env.REACT_APP_BOOKS_UPDATE
        ],
        resourceServerURLs: [ process.env.REACT_APP_RESOURCE_SERVER_URL ]
      } }
    >
      <App />
    </AuthProvider>,
  document.getElementById('root')
);

reportWebVitals();
