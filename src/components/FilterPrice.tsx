import React from 'react'
import { getPrice } from '../services/getAPI'
import StyleFilter from '../styles/styleFilter'




export default function FilterPrice({ price, setPrice }) {
  const getProductPrice = async (param1, param2, setPrice) => {
    const result = await getPrice(param1, param2)
    setPrice(result)
  }

  return (
    <StyleFilter>
      <h2>Refine sua busca</h2>
      <h3>por preço</h3>
      <label htmlFor="filter">
        <section>
          <div>
            <p>Sem Filtros </p>
            <input onChange={() => getProductPrice(0, 2000, setPrice)} type="radio" value="40" id="filter" name="filter" />
          </div>
          <div>
            <p>Até R$ 40 </p>
            <input onChange={() => getProductPrice(0, 40, setPrice)} type="radio" value="40" id="filter" name="filter" />
          </div>
          <div>
            <p>R$40 A R$60</p>
            <input onChange={() => getProductPrice(40, 60, setPrice)} type="radio" value="60" id="filter" name="filter" />
          </div>
          <div>
            <p>R$100 A R$200</p>
            <input onChange={() => getProductPrice(100, 200, setPrice)} type="radio" value="200" id="filter" name="filter" />
          </div>
          <div>
            <p>R$200 A R$500</p>
            <input onChange={() => getProductPrice(200, 500, setPrice)} type="radio" value="500" id="filter" name="filter" />
          </div>
          <div>
            <p>Acima de R$500</p>
            <input onChange={() => getProductPrice(500, 2000, setPrice)} type="radio" value="501" id="filter" name="filter" />
          </div>
        </section>
      </label>
    </StyleFilter>
  )
}
