import React from 'react';
import { Link } from "react-router-dom";

const Index = () => {

  return (
    <>
      <h1>Index</h1>

      <ul>
          <li>
            <Link to='/brand'>Marcas</Link>
          </li>
          <li>
            <Link to='/category'>Categorías</Link>
          </li>
          <li>
            <Link to='/product'>Productos</Link>
          </li>
      </ul>
    </>
  );
}

export default Index;