import React from 'react'
import { Link } from 'react-router-dom' 
export default function Navbar() {
  return (
    <header>
      <nav>
        <ul>
          <li> <Link to={'/'}>Inicio</Link>  </li>
          <li> <Link to={'/products'}>Productos</Link> </li>
          <li> <Link to={'/category/1'}>Teclados</Link> </li>
          <li> <Link to={'/category/2'}>Mouses</Link> </li>
          <li> <Link to={'/cart'}>Carrito</Link> </li>
        </ul>
      </nav>
    </header>
  )
}
