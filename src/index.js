import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AuthProvider } from "@asgardeo/auth-react";
import 'semantic-ui-css/semantic.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
     <AuthProvider
            config={ {
                signInRedirectURL: "http://localhost:3000",
                signOutRedirectURL: "http://localhost:3000",
                clientID: "jZTq86HfRpVL9VixjqlRxFts3G8a",
                baseUrl: "https://stage.api.asgardeo.io/t/choreotestaysh",
                scope: [ "openid","profile", "urn:choreotestaysh:books:add-books", "urn:choreotestaysh:books:delete-books", "urn:choreotestaysh:books:list-books", "urn:choreotestaysh:books:update-books" ],
                resourceServerURLs: [ "https://66277e3c-5cbc-4840-83e8-490c20d45fce-dev.e1-us-east-azure.st.choreoapis.dev/mcbs/books/1.0.0" ]

            } }
         >
          <App />
        </AuthProvider>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
