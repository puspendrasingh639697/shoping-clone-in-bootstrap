import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Product({ items,cart,setCart }) {
  const addToCard = (id,title,description,imgSrc)=>{
    const obj = {
      id,
      title,
      description,
      imgSrc
    }
    setCart([...cart,obj])
    console.log("Card-Puspendra",cart)
    toast.success('👌 Add Card Successful !', {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    
      });
  }
  return (
<>
<ToastContainer stacked
position="top-right"
autoClose={1500}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>
<div className='container my-5 text-center'>
      <div className='row'>
        {items.map((product) => (
          <div key={product.id} className='col-lg-3 col-md-4 col-sm-6 my-3'>
            <div className='card'>
              <Link to={`/product/${product.id}`}>
                <div className='ratio ratio-4x3'>
                  <img
                    src={product.imgSrc}
                    alt={product.title}
                    className='card-img-right img-fluid '
                  />
                </div>
              </Link>
              <div className='card-body'>
                <h5 className='card-title'>{product.title}</h5>
                <p className='card-text'>{product.description}</p>
                <div className='card-button'>
                  <button className='btn btn-danger'>{product.price}</button>
                  <button className='btn btn-primary mx-4'
                  onClick={()=>addToCard(product.id,product.title,product.description,product.imgSrc,product.price)}
                  >Add To Cart</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
</>
  );
}

export default Product;
