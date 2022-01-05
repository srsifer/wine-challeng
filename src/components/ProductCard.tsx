import React from 'react'
import StyleCard from '../styles/styleCards';

const addToCart = (data) => {
  let localCart = JSON.parse(localStorage.getItem('cart'))
  if (localCart === null || localCart === undefined) {
    return localStorage.setItem('cart', JSON.stringify([data]));
  }
  localCart
  console.log(localCart)
  localStorage.setItem('cart', JSON.stringify([...localCart, data]));
}

const ProductCard = (data) => {
  const { image, name, price, priceMember, priceNonMember, discount } = data.data
  return (
    <StyleCard>
      <div>
        <img src={image} alt="vinho" />
        <h3>{name}</h3>
        <p>{`R$ ${price}`}, {discount} %off</p>
        <p>sócio wine {`R$ ${priceMember}`}</p>
        <p>não sócio{`R$ ${priceNonMember}`}</p>
      </div>
      <button onClick={() => addToCart(data.data)}>ADICIONAR</button>
    </StyleCard>
  )
}

export default ProductCard
