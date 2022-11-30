import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from './store/store';
import { ThemeProvider } from 'styled-components';
import { THEME } from './theme';
import { GlobalStyle } from './theme/components';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Suspense fallback={<h1>loading</h1>}>
      <GlobalStyle />
      <Provider store={store}>
        <ThemeProvider theme={THEME}>
          <App />
        </ThemeProvider>
      </Provider>
    </Suspense>
  </React.StrictMode>,
);
