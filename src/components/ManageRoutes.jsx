import React from 'react';
import { Navigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import { selectorProfile } from '../redux/main';
import Header from "./Header";
import Footer from "./Footer";

export function ProtectedRouter({ redirectPath, children }) {
  const profile = useSelector(selectorProfile);

  if (!profile) return <Navigate to={redirectPath} replace />;
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export function UnProtectedRouter({
  redirectPath,
  children
}) {
  const profile = useSelector(selectorProfile);
  if (profile) return <Navigate to={redirectPath} replace />;
  return children;
}