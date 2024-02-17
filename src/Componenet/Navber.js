import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { items } from './Data';

function Navbar({ setData ,cart}) {
  const navigate = useNavigate();
  const [searchBar, setSearchBar] = useState('');
  const [categoryValue, setCategoryValue] = useState('');
  const [priceValue, setPriceValue] = useState('');

  const filterByCategory = (category) => {
    setCategoryValue(category);
    const element = items.filter((product) => product.category === category);
    setData(element);
    
  };

 
  const filterPrices = (price) => {
    setPriceValue(price);
    const element = items.filter((product) => product.price >= price);
    setData(element);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${searchBar}`);
    setSearchBar('')
  };


  return (
    <>
      <nav className='navbar navbar-expand-lg navbar-expand-sm navbar-expand-md navbar-expand-xl navbar-expand-xxl navbar-light bg-dark text-light'>
        <div className='container-fluid'>
          <Link to={'/'} className='navbar-brand text-light'>
            Shopping-App
          </Link>
        
           
          <div className='collapse navbar-collapse' id='navbarNav'>
            <ul className='navbar-nav me-auto'>
              <li className='nav-item'>
                <Link to={'/cart'} className='nav-link text-light'>
                <button type="button" className="btn btn-primary position-relative">
 Card
  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
   {cart.length}
    
  </span>
</button>
                </Link>
              </li>
            </ul>
            <form className='search-bar' onSubmit={handleSubmit}>
              <input
                type='text'
                value={searchBar}
                onChange={(e) => setSearchBar(e.target.value)}
                placeholder='Search Product in...'
                aria-label='Search Product'
                className='form-control'
              />
             
            </form>
          </div>
        </div>

        <div className='container text-light'>
          <select
            className='form-select'
            value={categoryValue}
            onChange={(e) => filterByCategory(e.target.value)}
          >
            <option value='' disabled>
              Category
            </option>
            <option value='mobiles'>Mobiles</option>
            <option value='laptops'>Laptops</option>
            <option value='tablets'>Tablets</option>
          </select>
          <select
            className='form-select'
            value={priceValue}
            onChange={(e) => filterPrices(e.target.value)}
          >
            <option value='' disabled>
              Prices
            </option>
            <option value=' ₹29999'>Price.. ₹29999</option>
            <option value=' ₹49999'>Price.. ₹49999</option>
            <option value=' ₹69999'>Price.. ₹69999</option>
            <option value=' ₹89999'>Price.. ₹89999</option>
          </select>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
