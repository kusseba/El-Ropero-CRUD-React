import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './assets/style/styles.css';
import 'react-toastify/dist/ReactToastify.css';
import Index from './index/Index';
import Brand from './brand/Brand';
import Category from './category/Category';
import Product from './product/Product';
import Register from './register/Register';
import Login from './login/Login';
import FaqList from './faq/FaqList';
import FaqDetail from './faq/FaqDetail'
import Contact from './contact/Contact';

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

const router = createBrowserRouter([
  {
    path: '/',
    element: <Index />,
  },
  {
    path: 'brand',
    element: <Brand />,
  },
  {
    path: 'category',
    element: <Category />,
  },
  {
    path: 'product',
    element: <Product />,
  },
  {
    path: 'register',
    element: <Register />,
  },
  {
    path: 'login',
    element: <Login />,
  },
  {
    path: 'faqs',
    element: <FaqList />,
  },
  {
    path: 'faq/:id',
    element: <FaqDetail />,
  },
  {
    path: 'contact',
    element: <Contact />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
