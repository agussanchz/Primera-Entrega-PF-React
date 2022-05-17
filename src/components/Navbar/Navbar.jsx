//Importaciones
import React from 'react'
import { Link } from 'react-router-dom' 
//Exportaciones de mi funcion Navbar, donde creo un menu de navegacion
export default function Navbar() {
  return (
    //Creacion de mi header y menu de navegacion
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
