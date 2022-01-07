import React, { useState } from 'react';
import SearchStyle from '../styles/searchStyle'
import wineSvg from '../../public/black'
import { getProductByName } from '../services/getAPI';
import Link from 'next/link'
import inconCart from '../../public/cartIcon.png'
import Image from 'next/image'



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
        <button onClick={() => searchName()}>buscar</button>
      </div>
      <Link href="/cart"><a> <Image src="/../../public/cartIcon.png" width="20px" height="20px" /> </a></Link>
    </SearchStyle>
  )
}
