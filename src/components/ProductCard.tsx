import React from 'react'
import StyleCard from '../styles/styleCards';
import { v4 as uuidv4 } from 'uuid';
import Link from 'next/link'
import ButtonAdd from '../styles/buttons';

const addToCart = (data) => {
  let localCart = JSON.parse(localStorage.getItem('cart'))
  if (localCart === null || localCart === undefined) {
    return localStorage.setItem('cart', JSON.stringify([data]));
  }
  localStorage.setItem('cart', JSON.stringify([...localCart, data]));
}

const ProductCard = (data) => {
  const { image, name, price, priceMember, priceNonMember, discount, } = data.data
  return (
    <StyleCard>
      <Link href={`${name}`}><a>
        <img src={image} alt="vinho" />
        <h3>{name}</h3>
        <h4>{`R$ ${price}`}, {discount} %off</h4>
        <h3>sócio wine {`R$ ${priceMember}`}</h3>
        <p>não sócio{`R$ ${priceNonMember}`}</p>
      </a></Link>
      <button onClick={() => addToCart(data.data)}>ADICIONAR</button>
    </StyleCard>
  )
}

export default ProductCard
