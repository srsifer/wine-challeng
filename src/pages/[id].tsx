import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import SearchStyle from '../styles/searchStyle';
import wineSvg from '../../public/black';
import { getProductByName } from '../services/getAPI';
import { useRouter } from 'next/router';



const productDetails = () => {
  const [productDetails, setProductDetails] = useState([])
  const router = useRouter().query.id;

  const renderPage = async () => {
    const result = await getProductByName(router)
    setProductDetails([result.data[0]])

  }

  useEffect(() => {
    renderPage()
  }, [])


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

      <div>
        {productDetails.map(({ name, price, sommelierComment, priceNonMember, flag, size, classification, image, country, }) => {
          <div>
            <div>
              <p>{name}</p>
              <p>{price}</p>
              <p>{flag}</p>
              <p>{size}</p>
              <p>{classification}</p>
              <p>{country}</p>
              <p>{priceNonMember}</p>
              <p>{sommelierComment}</p>
            </div>
          </div>
        })}
      </div>
    </div>
  )
}


export default [productDetails];
