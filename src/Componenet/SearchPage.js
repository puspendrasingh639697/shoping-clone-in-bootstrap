import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { items } from './Data';
import Product from './Product';

function SearchPage() {
  const {tarm} = useParams();
  const [filterData,setFilterData] =  useState([]);

  useEffect(()=>{
  const filterdatas = ()=>{
    const data = items.filter((pro)=>pro.title.toLowerCase().includes(tarm.toLowerCase()))
    setFilterData(data)
    console.log(data)
  }
 filterdatas()
  },[tarm])

  return (
   <>
   <Product items={filterData}/>
   </>
  )
}

export default SearchPage
