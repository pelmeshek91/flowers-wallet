import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store, persistor } from 'redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import './fonts/Circe/Circe-Bold.ttf';
import './fonts/Circe/Circe-Regular.ttf';
import './fonts/Poppins/Poppins-Bold.ttf';
import './fonts/Poppins/Poppins-Regular.ttf';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter basename="/flowers-wallet/">
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

//  basename = '/flowers-wallet/';
