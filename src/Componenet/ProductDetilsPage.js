import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Product from './Product';
import { items } from './Data';



function ProductDetilsPage() {
  const [product,setProduct] = useState({});
  const [relative,setRelative]=useState([])
  const { id } = useParams();

  useEffect(() => {
    const filteredProduct = items.filter((products) =>products.id == id);
    setProduct(filteredProduct[0]);
    const ProductRelative = items.filter((pro) => pro.category === product.category);
    setRelative(ProductRelative);
    console.log(ProductRelative)
  }, [id,product.category]);



  return (
    
      <>
      <>
      <div className='container'>
        <img src={product.imgSrc} alt={product.title} 
        style={{width:'300px'}}/>
      </div>
      <div className='text-center top-10'>
        <h1 className='card-title'>{product.title}</h1>
        <p className='card-text'>{product.description}</p>
        <div className='card-button'>
          <button className='btn btn-danger'>{product.price}</button>
          <button className='btn btn-primary mx-4'>Add To Cart</button>
        </div>
      </div>
      <h1 className='text-center'>Relative Products</h1>
      <hr/>
      <Product items={relative} />
    </>
      </>
  )
}

export default ProductDetilsPage;
