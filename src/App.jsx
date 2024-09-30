import React, { useCallback, useEffect } from 'react';
import { ProtectedRouter, UnProtectedRouter } from './components/ManageRoutes';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useSelector } from 'react-redux';
import axios from 'axios';
import { setMain, selectorLoading, dispatch } from './redux/main';
import ErrorPage from "./components/ErrorPage";
import Loader from './components/Loader';
import Index from './screens/index/Index';
import Product from './screens/product/Product';
import Register from './screens/register/Register';
import Login from './screens/login/Login';
import FaqList from './screens/faq/FaqList';
import FaqDetail from './screens/faq/FaqDetail'
import Contact from './screens/contact/Contact';
import PasswordReset from './screens/resetPassword/PasswordReset';
import SendResetPasswordEmail from './screens/resetPassword/SendResetPassword';
import VerifyAccount from './screens/verifyAccount/VerifyAccount';

const router = createBrowserRouter([
  {
    path: '/',
    element: <ProtectedRouter children={<Index />} redirectPath='/signin' />,
    errorElement: <ErrorPage />
  },
  {
    path: 'product',
    element: <ProtectedRouter children={<Product />} redirectPath='/signin' />,
    errorElement: <ErrorPage />
  },
  {
    path: 'signup',
    element: <UnProtectedRouter children={<Register />} redirectPath='/' />,
    errorElement: <ErrorPage />
  },
  {
    path: 'signin',
    element: <UnProtectedRouter children={<Login />} redirectPath='/' />,
    errorElement: <ErrorPage />
  },
  {
    path: 'faq',
    element: <FaqList />,
    errorElement: <ErrorPage />
  },
  {
    path: 'faq/:id',
    element: <FaqDetail />,
    errorElement: <ErrorPage />
  },
  {
    path: 'contact',
    element: <ProtectedRouter children={<Contact />} redirectPath='/signin' />,
    errorElement: <ErrorPage />
  },

  {
    path: 'verify-account',
    element: <UnProtectedRouter children={<VerifyAccount />} redirectPath='/' />,
    errorElement: <ErrorPage />
  },

  {
    path: 'send-reset-password',
    element: <UnProtectedRouter children={<SendResetPasswordEmail />} redirectPath='/' />,
    errorElement: <ErrorPage />
  },

  {
    path: 'password-reset',
    element: <UnProtectedRouter children={<PasswordReset />} redirectPath='/' />,
    errorElement: <ErrorPage />
  },
]);

const App = () => {
  const loading  = useSelector(selectorLoading);

  const get_user = useCallback(async () => {
    try {
      const token = localStorage.getItem('@token');
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/user/`,
        { headers: { 'Authorization': `Token ${token}` } }
      )
      dispatch(setMain({ loading: false, ...res.data }));
    } catch {
      dispatch(setMain({ loading: false }));
    }
  }, []);

  useEffect(() => {
    get_user();
  }, [get_user]);

  if (loading) return <Loader />;
  return <RouterProvider router={router} fallbackElement={<Loader />} />;
}
export default App;