import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Link from 'next/link'
import SearchStyle from '../styles/searchStyle'
import wineSvg from '../../public/black'
import StylesDiv from '../styles/cartStyles';
import SectionStylesCart from '../styles/sectionStylesCart'


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
        <SearchStyle>
          <h1>{wineSvg}</h1>
          <section>
            <p>Clube</p>
            <p>Loja</p>
            <p>Produtores</p>
            <p>Ofertas</p>
            <p>Eventos</p>
          </section>
        </SearchStyle>
        <Link href="/"><a>voltar</a></Link>
        <p>nada por aqui</p>
      </div>)
    }

    return (

      <div>
        <SearchStyle>
          <h1>{wineSvg}</h1>
          <section>
            <p>Clube</p>
            <p>Loja</p>
            <p>Produtores</p>
            <p>Ofertas</p>
            <p>Eventos</p>
          </section>
          <Link href="/"><a>voltar</a></Link>
        </SearchStyle>
        <SectionStylesCart>
          {state.map(({ image, name, id, discount, price, priceMember, priceNonMember }) => {
            return (
              <div key={uuidv4()}>
                <StylesDiv>
                  <img src={image} alt="vinho" />
                  <h3>{name}</h3>
                  <p>{`R$ ${price}`}, {discount} %off</p>
                  <p>sócio wine {`R$ ${priceMember}`}</p>
                  <p>não sócio{`R$ ${priceNonMember}`}</p>
                  <button onClick={() => removeToCart(id)}>remover</button>
                </StylesDiv>
              </div>
            )
          })}
        </SectionStylesCart>
      </div>
    )
  }
}

export default cart;
