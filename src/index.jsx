import './assets/style/styles.css';
import 'react-toastify/dist/ReactToastify.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Provider } from 'react-redux';
import store from './redux/main';
import App from './App';

const theme = createTheme({
  typography: {
    fontFamily: 'Montserrat, sans-serif',
    color: '#1b1b1b'
  },
  palette: {
    primary: {
      main: '#1b1b1b'
    }
  },
  components: {
    MuiIconButton: {
      defaultProps: {
        disableRipple: true
      }
    }
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
