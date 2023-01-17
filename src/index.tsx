import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createTheme, ThemeProvider } from '@mui/material';
import './index.scss';
import { HashRouter } from 'react-router-dom';
import { App } from './App';
import { store } from './app/store';

const theme = createTheme({
  typography: {
    fontFamily: 'Montserrat, sans-serif',
  },
  palette: {
    text: {
      primary: 'rgb(54, 54, 54)',
      secondary: 'rgb(87, 87, 87)',
    },
  },
});

const Root = () => (
  <HashRouter>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </Provider>
    </ThemeProvider>
  </HashRouter>
);

ReactDOM.render(<Root />, document.getElementById('root'));
