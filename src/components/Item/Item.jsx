//Importaciones
import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

//Exportacion de mi funcion Item, encargada de mostrar una card
export default function Item({item}) {
  //Hook navigate, que me permite moverme hacia otra url params 
  const navigate = useNavigate();
  return (
    //Card con las caracteristicas de los items recibidos por ItemListContainer
    //Y aplicacion de una funcion onClick, que al hacerle click a la card, aplique
    //el estado "navigate" para moverse a la urlParams con un id unico
    <div className='ItemCard'>
        <Card style={{ width: '18rem' }} onClick={() => navigate(`/productId/${item.id}`)}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Button variant="primary">VER MAS</Button>
            </Card.Body>
        </Card>
    </div>
  )
}
 