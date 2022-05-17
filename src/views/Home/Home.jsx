import React from 'react'
import ItemListContainer from '../../components/ItemListContainer/ItemListContainer'


export default function Header() {
  return (
    <div className='Home'>
      <h1>Esta es la pagina de inicio</h1>
      <ItemListContainer/>
    </div>
    //debe mostrar solo los productos traidos por el ItemListContainer
  )
}
