import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import ProductCard from '../components/ProductCard'
import StyleList from '../styles/productList'

export default function ProductList(data) {
  return (
    <StyleList>
      {data.data.map((index) => <ProductCard key={uuidv4()} data={index} />)}
    </StyleList>
  )
}

