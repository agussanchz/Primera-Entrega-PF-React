import React from 'react'
import ItemListContainer from '../../components/ItemListContainer/ItemListContainer'
import { useParams } from 'react-router-dom'

export default function Category() {
  const { categoryId } = useParams();
  console.log(categoryId)
  return (
    <div>
        <ItemListContainer categoryId={categoryId}/>
    </div>
    //que me muestre los productos por categorias a traves de sus ID, crear
    //una data con category_id: teclados por ejemplo
  )
}
