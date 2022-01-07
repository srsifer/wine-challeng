import React from 'react'
import Link from 'next/link'
import SearchStyle from '../styles/searchStyle';
import wineSvg from '../../public/black';


const productDetails = (data) => {
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
    </div>
  )
}
export default productDetails;
