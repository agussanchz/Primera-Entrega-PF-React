//Importaciones
import React from 'react'
import { Link } from 'react-router-dom' 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

//Exportaciones de mi funcion Navbar, donde creo un menu de navegacion
export default function Navbar() {
  return (
    //Creacion de mi header y menu de navegacion
    <header className='header'>
      <nav className='nav'>
        <div className='nav__logo'>
          <Link className='nav__link'to={'/'}>AsTecnologia</Link> 
        </div>
        <ul className='nav__ul'>
          <li className='nav__li'> <Link className='nav__link'to={'/products'}>Productos</Link> </li>
          <li className='nav__li'> <Link className='nav__link'to={'/category/1'}>Teclados</Link> </li>
          <li className='nav__li'> <Link className='nav__link'to={'/category/2'}>Mouses</Link> </li>
          <li className='nav__li'> <Link className='nav__link'to={'/cart'}><FontAwesomeIcon icon={faCartShopping} /></Link> </li>
        </ul>
      </nav>
    </header>
  )
}
