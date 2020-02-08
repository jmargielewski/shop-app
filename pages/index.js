import React from "react";
import axios from "axios";
import ProductList from "../components/Index/ProductList";

function Home({ products }) {
  return <ProductList products={products} />;
}

Home.getInitialProps = async () => {
  // fetch data on server
  const url = "http://localhost:3000/api/products";
  const response = await axios.get(url);

  // return data as an object
  // note: this object will be merged with existing props
  return { products: response.data };
};

export default Home;
