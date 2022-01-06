import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Link from 'next/link'
import SearchBar from '../components/SearchBar';

const cart = () => {
  const [state, setState] = useState([])
  useEffect(() => {
    setState(JSON.parse(localStorage.getItem('cart')))
  }, []);

  const removeToCart = (idRemove: string) => {
    const filtredState = state.filter((index) => idRemove !== index.id)
    setState(filtredState)
    localStorage.setItem('cart', JSON.stringify(filtredState))
  }

  {
    if (state === [] || !state) {
      return (<div>
        <SearchBar />
        <Link href="/"><a>voltar</a></Link>
        <p>nada por aqui</p>
      </div>)
    }

    return (

      <div>
        <SearchBar />
        <Link href="/"><a>voltar</a></Link>
        {state.map(({ image, name, id, discount, price, priceMember, priceNonMember }) => {
          return (
            <div key={uuidv4()}>
              <img src={image} alt="vinho" />
              <h3>{name}</h3>
              <p>{`R$ ${price}`}, {discount} %off</p>
              <p>sócio wine {`R$ ${priceMember}`}</p>
              <p>não sócio{`R$ ${priceNonMember}`}</p>
              <button onClick={() => removeToCart(id)}>remover</button>
            </div>
          )
        })}
      </div>
    )
  }
}

export default cart;
