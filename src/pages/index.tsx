import Head from 'next/head';
import React, { useState } from 'react';
import axios from "axios";
import SearchBar from '../components/SearchBar';
import FilterPrice from '../components/FilterPrice';
import ProductList from '../components/ProductList';
import { getPage } from '../services/getAPI'
import StyleMain from '../styles/homePage';
import ButtonAdd from '../styles/buttons'


function Home(data: object) {
  const [] = useState()
  return (
    <div>
      <Head>
        <title>wine</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <SearchBar />
        <StyleMain>
          <FilterPrice />
          <ProductList data={data.data} />
        </StyleMain>
      </main>
      <footer>
        <ButtonAdd>
          <button onClick={() => getPage(1)}>1</button>
          <button onClick={() => getPage(2)}>2</button>
          <button onClick={() => getPage(3)}>3</button>
          <button onClick={() => getPage(4)}>...</button>
        </ButtonAdd>
      </footer>
    </div >
  )
}

Home.getInitialProps = async () => {
  const URL = `https://wine-back-test.herokuapp.com/products?page=${1}&limit=${10}`
  const response = await axios.get(URL);
  return { data: response.data.items };
}

export default Home;
