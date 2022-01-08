import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import SearchStyle from '../styles/searchStyle';
import ProductDetailsstyles from '../styles/productDetails';
import wineSvg from '../../public/black';
import { getProductByName } from '../services/getAPI';
import { useRouter } from 'next/router';
import axios from "axios";
import SubDivStyle from "../styles/subtitleProductDetails";
import DetailsPrice from '../styles/detailsPrice';

import { perfilIcon } from '../../public/conta';


const productDetails = (data) => {
  const [details, setDetails] = useState([data.data[0]])
  const router = useRouter().query.id;

  const addToCartfromProduct = (data) => {
    let localCart = JSON.parse(localStorage.getItem('cart'))
    if (localCart === null || localCart === undefined) {
      return localStorage.setItem('cart', JSON.stringify([data]));
    }
    localStorage.setItem('cart', JSON.stringify([...localCart, data]));
  }


  const renderPage = async () => {
    const result = await getProductByName(router)
    setDetails([result.data[0]])

  }

  useEffect(() => {
    renderPage()
  }, [])

  console.log(details)
  return (
    <div>
      <SearchStyle>
        <h1>{wineSvg}</h1>
        <Link href="/"><a> {'< '}voltar</a></Link>
        <section>
          <p>Clube</p>
          <p>Loja</p>
          <p>Produtores</p>
          <p>Ofertas</p>
          <p>Eventos</p>
        </section>
        <h2>{perfilIcon}</h2>
        <Link href="/cart"><a> carrinho </a></Link>
      </SearchStyle>

      <div>
        {details.map(({ name, priceMember, sommelierComment, priceNonMember, flag, size, classification, image, country, rating, type }) => {
          return (
            <>
              <ProductDetailsstyles>
                <div>
                  <img src={image} alt="vinho" />
                </div>
                <section>
                  <h2>{name}</h2>
                  <SubDivStyle>
                    <img src={flag} alt="bandeira" />
                    <p>{country}</p>
                    <p>{type}</p>
                    <p>{classification}</p>
                    <p>{size}</p>
                    <p>{rating}</p>
                  </SubDivStyle>
                  <DetailsPrice>
                    <h3>{`R$${priceMember}0`}</h3>
                    <p>{` NÃO SÓCIO R$${priceNonMember},0`}</p>
                  </DetailsPrice>
                  <h2>Comentário do Sommelier</h2>
                  <h6>{sommelierComment}</h6>
                  <div>
                    <button onClick={() => addToCartfromProduct(details[0])}>ADICIONAR</button>
                  </div>
                </section>
              </ProductDetailsstyles>
            </>
          )
        })}
      </div>
    </div>
  )
}

productDetails.getInitialProps = async () => {
  const URL = `https://wine-back-test.herokuapp.com/products?name=bacalhoa`
  const response = await axios.get(URL);
  return { data: response.data.items };
}
export default productDetails;
