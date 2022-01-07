import axios from "axios";

export const getPage = async (page: number) => {
  const URL = `https://wine-back-test.herokuapp.com/products?page=${page}&limit=${9}`
  const response = await axios.get(URL);
  return { data: response.data.items }
}

export const getPrice = async (param1: number, param2: number) => {
  const URL = `https://wine-back-test.herokuapp.com/products?filter=${param1}-${param2}&limit=${9}`;
  const response = await axios.get(URL);
  return { data: response.data.items }
}

export const getProductByName = async (name: string) => {
  const URL = `https://wine-back-test.herokuapp.com/products?name=${name}`;
  const response = await axios.get(URL);
  return { data: response.data.items }
}
