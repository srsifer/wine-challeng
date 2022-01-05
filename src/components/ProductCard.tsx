import React from 'react'
import StyleCard from '../styles/styleCards';

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
      <button>ADICIONAR</button>
    </StyleCard>
  )
}

export default ProductCard
