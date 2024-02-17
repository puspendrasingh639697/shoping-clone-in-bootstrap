
import 'bootstrap/dist/css/bootstrap.min.css';
import Navber from './Componenet/Navber';
import{ BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Product from './Componenet/Product';
import ProductDetilsPage from './Componenet/ProductDetilsPage';
import SearchPage from './Componenet/SearchPage';
import CardPage from './Componenet/CardPage';
import { useState } from 'react';
import { items } from './Componenet/Data';



function App() {
  const [data,setData] =useState([...items]);
  const [cart,setCart] = useState([])
 
  return (
    <>
    <Router>
    <Navber cart={cart} setData={setData}/>
    <Routes>
      <Route path='/' element={<Product cart={cart} setCart={setCart} items={data}/>}/>
      <Route path='/product/:id' element={<ProductDetilsPage/>}/>
      <Route path='/search/:tarm' element={<SearchPage/>}/>
      <Route path='/cart' element={<CardPage cart={cart} setCart={setCart}/>}/>
    </Routes>
 

    </Router>

</>
  );
}

export default App;
