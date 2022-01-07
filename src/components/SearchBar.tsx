import React, { useState } from 'react';
import SearchStyle from '../styles/searchStyle'
import wineSvg from '../../public/black'
import { getProductByName } from '../services/getAPI';
import Link from 'next/link'
import { searchIcon } from '../../public/Busca';
import { perfilIcon } from '../../public/conta';







export default function SearchBar({ search, setSearch }) {
  const [nameSearch, setNameSearch] = useState(null)

  const inputName = ({ value }) => {
    setNameSearch(value)
  }

  const searchName = async () => {
    const result = await getProductByName(nameSearch)
    setSearch(result)
  }
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
      <div>
        <input onChange={(e) => inputName(e.target)} type="text" />
        <button onClick={() => searchName()}>{searchIcon}</button>
      </div>
      <h2>{perfilIcon}</h2>
      <Link href="/cart"><a> carrinho </a></Link>
    </SearchStyle>
  )
}
