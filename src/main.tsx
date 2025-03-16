import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Amplify } from "aws-amplify";
import outputs from "../amplify_outputs.json";
import '@aws-amplify/ui-react/styles.css';
import { Authenticator } from '@aws-amplify/ui-react';
import CustomFormFields from './CustomFormFields.tsx';

Amplify.configure(outputs);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Authenticator
      signUpAttributes={['email']}
      components={{
        SignUp: {
          FormFields: CustomFormFields // override just FormFields for sign up to have username
        }
      }}
    >
      <App />
    </Authenticator>
  </React.StrictMode>
);
