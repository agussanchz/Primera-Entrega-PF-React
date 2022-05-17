//Importaciones
import React from 'react'
import ItemListContainer from '../../components/ItemListContainer/ItemListContainer'

//Exportacion de mi funcion Home
export default function Home() {
  return (
    //Renderizado de mi pagina principal, donde llamo al componente ItemListContainer, donde me traera los productos
    <div className='Home'>
      <h1>Esta es la pagina de inicio</h1>
      <ItemListContainer/>
    </div>
  )
}
