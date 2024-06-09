import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './assets/styles/styles.css';
import Index from './index/Index';
import Brand from './brand/Brand';
import FrmBrand from './brand/FrmBrand';
import Category from './category/Category';
import FrmCategory from './category/FrmCategory';
import Product from './product/Product';
import FrmProduct from './product/FrmProduct';

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
    path: 'create-brand',
    element: <FrmBrand />,
  },
  {
    path: 'category',
    element: <Category />,
  },
  {
    path: 'create-category',
    element: <FrmCategory />,
  },
  {
    path: 'product',
    element: <Product />,
  },
  {
    path: 'create-product',
    element: <FrmProduct />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);