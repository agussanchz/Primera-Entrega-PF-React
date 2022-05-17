//Importacio de react-router-dom
import { BrowserRouter, Routes, Route } from 'react-router-dom'
//Importaciones de views
import Home from './views/Home/Home'
import Products from './views/Products/Products'
import Cart from './views/Cart/Cart'
import Navbar from './components/Navbar/Navbar';
import Category from './views/Category/Category';
import ProductId from './views/ProductId/ProductId'

//RENDERIZADO DE MI APP
function App() { 
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/products" element={<Products/>}/>
            <Route exact path="/category/:categoryId" element={<Category/>}/>
            <Route exact path="/productId/:productId" element={<ProductId/>}/>
            <Route exact path="/cart" element={<Cart/>}/>
        </Route>
      </Routes>  
    </BrowserRouter>
  );
}

export default App;
