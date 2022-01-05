import React from 'react';
import SearchStyle from '../styles/searchStyle'
import wineSvg from '../../public/black'
import { getProductByName } from '../services/getAPI';


export default function SearchBar() {
  return (
    <SearchStyle>
      <h1>{wineSvg}</h1>
      <input onChange={(e) => getProductByName(e.target.value)} type="text" /> buscar
    </SearchStyle>
  )
}
