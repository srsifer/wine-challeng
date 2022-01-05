import React from 'react'
import Image from 'next/image';

const ProductCard = (data) => {
  console.log(data)
  const { image, name, price, priceMember, priceNonMember, flag } = data.data
  return (
    <div>
      <img src={image} alt="vinho" />
      <img src={flag} alt="flag" width="5%" />
      <p>{name}</p>
      <p>{price}</p>
      <p>{priceMember}</p>
      <p>{priceNonMember}</p>
      <button>add to cart</button>
    </div>
  )
}

export default ProductCard
