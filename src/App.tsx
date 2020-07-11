import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import * as firebase from 'firebase/app';
import Routes from './routes';

import GlobalStyle from './styles/global';

import { ToastProvider } from './hooks/toast';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCpo014-n-lKlTekot3CukQdW-myRkYrkw',
  authDomain: 'desafio-handtalk.firebaseapp.com',
  databaseURL: 'https://desafio-handtalk.firebaseio.com',
  projectId: 'desafio-handtalk',
  storageBucket: 'desafio-handtalk.appspot.com',
  messagingSenderId: '273358150685',
  appId: '1:273358150685:web:5db1642f4a08befa5dfaf4',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ToastProvider>
        <Routes />
      </ToastProvider>

      <GlobalStyle />
    </BrowserRouter>
  );
};

export default App;
