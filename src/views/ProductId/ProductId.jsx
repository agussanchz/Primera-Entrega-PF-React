import React from 'react'
import ItemDetailContainer from '../../components/ItemDetailContainer/ItemDetailContainer'
import { useParams } from 'react-router-dom'

export default function ProductId() {
  const { productId } = useParams();
  
  return (
    <div>
        <ItemDetailContainer productId={+productId}/>      
    </div>
    //que me muestre solo un item a traves de su ID
  )
}
