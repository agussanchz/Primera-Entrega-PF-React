import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

export default function Item({item}) {
  const navigate = useNavigate();
  return (
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
 