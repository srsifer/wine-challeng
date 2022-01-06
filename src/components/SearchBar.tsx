import React from 'react';
import SearchStyle from '../styles/searchStyle'
import wineSvg from '../../public/black'
import { getProductByName } from '../services/getAPI';
import Link from 'next/link'

export default function SearchBar() {
  return (
    <SearchStyle>
      <h1>{wineSvg}</h1>
      <section>
        <p>Clube</p>
        <p>Loja</p>
        <p>Produtores</p>
        <p>Ofertas</p>
        <p>Eventos</p>
      </section>
      <input onChange={(e) => getProductByName(e.target.value)} type="text" /> buscar
      <Link href="/cart"><a> Carrinho</a></Link>
    </SearchStyle>
  )
}
