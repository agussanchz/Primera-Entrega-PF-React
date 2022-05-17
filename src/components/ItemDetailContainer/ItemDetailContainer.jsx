import React from 'react'
import { products } from "../../Data/productos";
import ItemDetail from '../ItemDetail/ItemDetail';
import { Container, Row, Col } from 'react-bootstrap';

export default function ItemDetailContainer({productId}) {

  const [item, setItem] = React.useState([]);

  React.useEffect(() => {
    setItem(products.find(item => item.id === productId));
  }, [productId]);

  return (
    <div className='item-container-detail'>
      <Container>
        <Row>
          <Col>
              <ItemDetail item={item}/>
          </Col>
        </Row>
      </Container>

    </div>

  )
}
