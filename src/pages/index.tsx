import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import axios from "axios";
import SearchBar from '../components/SearchBar';
import FilterPrice from '../components/FilterPrice';
import ProductList from '../components/ProductList';
import StyleMain from '../styles/homePage';
import Pagination from '../components/Pagination'
import { getPage } from '../services/getAPI'

const limit: number = 9;

function Home(data) {
  const [apiInit, setApiInit] = useState(data)
  const [offset, setOffSet] = useState(0)
  const [search, setSearch] = useState(null)
  const [price, setPrice] = useState(null)

  const getProductbyPice = async () => {
    setApiInit(price)
  }

  const getNextPage = async () => {
    const page = await getPage(Math.max((offset / limit), 1))
    setApiInit(page)
  }

  const getProductName = async () => {
    setApiInit(search)
  }

  useEffect(() => {

    if (offset !== 0) {
      getNextPage()
    }
  }, [offset])

  useEffect(() => {
    if (search !== null) {
      getProductName()
    }
  }, [search])

  useEffect(() => {
    if (price !== null) {
      getProductbyPice()
    }
  }, [price])

  return (
    <div>
      <Head>
        <title>wine</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <SearchBar search={search} setSearch={setSearch} />
        <StyleMain>
          <FilterPrice price={price} setPrice={setPrice} />
          <ProductList data={apiInit.data} />
        </StyleMain>
      </main>
      <footer>
        <Pagination
          limit={limit}
          total={62}
          offset={offset}
          setOffSet={setOffSet}
        />
      </footer>
    </div >
  )
}

Home.getInitialProps = async () => {
  const URL = `https://wine-back-test.herokuapp.com/products?page=${1}&limit=${9}`
  const response = await axios.get(URL);
  return { data: response.data.items };
}

export default Home;
