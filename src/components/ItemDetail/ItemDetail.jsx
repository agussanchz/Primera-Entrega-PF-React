//Importaciones
import React from 'react'
import { Card, Button } from 'react-bootstrap'

//Exportacion de mi funcion ItemDetail, que es la encargada de recibir productos y
// armar una card con sus caracteristicas
export default function ItemDetail({item}) {
  return (
    <div>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
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
