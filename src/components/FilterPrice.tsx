import React from 'react'
import { getPrice } from '../services/getAPI'
import StyleFilter from '../styles/styleFilter'




export default function FilterPrice() {
  return (
    <StyleFilter>
      <h2>Refine sua busca</h2>
      <h3>por preço</h3>
      <label htmlFor="filter">
        <input onChange={() => getPrice(0, 40)} type="radio" value="40" id="filter" name="filter" /> Até R$ 40
        <input onChange={() => getPrice(40, 60)} type="radio" value="60" id="filter" name="filter" /> R$40 A R$60
        <input onChange={() => getPrice(100, 200)} type="radio" value="200" id="filter" name="filter" /> R$100 A R$200
        <input onChange={() => getPrice(200, 500)} type="radio" value="500" id="filter" name="filter" /> R$200 A R$500
        <input onChange={() => getPrice(500, 2000)} type="radio" value="501" id="filter" name="filter" /> Acima de R$500
      </label>
    </StyleFilter>
  )
}
