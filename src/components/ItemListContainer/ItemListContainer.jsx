import React from 'react'
import { Container, Row, Col} from 'react-bootstrap'
import ItemList from '../ItemList/ItemList'
import { products } from "../../Data/productos";

export default function ItemListContainer({categoryId}) {
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    if(categoryId){
      setItems(products.filter(item => item.category_id === +categoryId));
    }
    else{
      setItems(products);
    }
  },[categoryId])

  return (
    <div className='item-container-list'>
      <Container>
        <Row>
          <Col>
              <ItemList items={items}/>
          </Col>
        </Row>
      </Container>

    </div>
  )
}
 