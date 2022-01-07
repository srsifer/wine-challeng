import React, { useState, useEffect } from 'react'
import ButtonAdd from '../styles/buttons';
import StylesUl from '../styles/StylesUl'
import { v4 as uuidv4 } from 'uuid';


const MAX_ITEMS: number = 3;
const MAX_LEFT: number = (MAX_ITEMS - 1) / 2;



const Pagination = ({ limit, total, offset, setOffSet }) => {
  const current: number = offset ? (offset / limit) + 1 : 1;
  const pages: number = Math.ceil(total / limit);
  const first = Math.max(current - MAX_LEFT, 1);

  const onPageChanged = (page: number) => {
    setOffSet((page - 1) * limit)

  }
  return (
    <StylesUl>
      <ButtonAdd>
        <li>
          <button
            onClick={() => onPageChanged(current - 1)}
            disabled={current === 1}
          >
            Anterior
          </button>
        </li>
        {Array.from({ length: Math.min(MAX_ITEMS, pages) })
          .map((_, index) => index + first)
          .map((page) => (
            <li key={uuidv4()}>
              <button
                disabled={current === 8}
                onClick={() => onPageChanged(page)}
              >
                {page}
              </button>
            </li>
          ))
        }
        <li>
          <button
            onClick={() => onPageChanged(current + 1)}
            disabled={current === 8}
          >
            Próximo
          </button>
        </li>
      </ButtonAdd>
    </StylesUl >
  )
}

export default Pagination;
