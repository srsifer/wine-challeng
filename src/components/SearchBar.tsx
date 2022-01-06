import React, { useState } from 'react';
import SearchStyle from '../styles/searchStyle'
import wineSvg from '../../public/black'
import { getProductByName } from '../services/getAPI';
import Link from 'next/link'
import inconCart from '../../public/cartIcon.png'
import Image from 'next/image'



export default function SearchBar() {
  const [nameSearch, setNameSearch] = useState()

  const inputName = ({ value }) => {
    setNameSearch(value)
  }

  const searchName = async () => {
    const result = await getProductByName(nameSearch)
    console.log(result)
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
      <input onChange={(e) => inputName(e.target)} type="text" />
      <button onClick={() => searchName()}>buscar</button>
      <Link href="/cart"><a> <Image src="/../../public/cartIcon.png" width="20px" height="20px" /> </a></Link>
    </SearchStyle>
  )
}
