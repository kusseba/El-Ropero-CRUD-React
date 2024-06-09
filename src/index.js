import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './assets/styles/styles.css';
import Index from './index/Index';
import Brand from './brand/Brand';
import Category from './category/Category';
import Product from './product/Product';

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
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);