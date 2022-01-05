import React from 'react'
import StyleFilter from '../styles/styleFilter'

export default function FilterPrice() {
  return (
    <StyleFilter>
      <div>
        <h2>Refine sua busca</h2>
        <h3>por preço</h3>
        <label htmlFor="filter">
          <input type="checkbox" value="40" id="filter" name="filter" /> Até R$ 40
          <input type="checkbox" value="60" id="filter" name="filter" /> R$40 A R$60
          <input type="checkbox" value="200" id="filter" name="filter" /> R$100 A R$200
          <input type="checkbox" value="500" id="filter" name="filter" /> R$200 A R$500
          <input type="checkbox" value="501" id="filter" name="filter" /> Acima de R$500
        </label>
      </div>
    </StyleFilter>
  )
}
