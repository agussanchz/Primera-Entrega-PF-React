//Importaciones
import React from 'react'
import { Card, Button } from 'react-bootstrap'

//Exportacion de mi funcion ItemDetail, que es la encargada de recibir productos y
// armar una card con sus caracteristicas
export default function ItemDetail({item}) {
  return (
    <div className='item-card'>
        <Card  className='card' style={{ width: '50rem'}}>
            <Card.Img variant="top" src={item.img} />
            <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button variant="primary">{item.price}</Button>
            </Card.Body>
        </Card>
    </div>
  )
}
