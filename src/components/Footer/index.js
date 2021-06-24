import axios from "axios";
import React, { useState, useEffect } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios("https://5d76bf96515d1a0014085cf9.mockapi.io/product")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => alert(err));
  }, []); //componentDidmount

  useEffect(() => {}); //componentDidmount and DidUpdate

  useEffect(() => {
    return () => {
      //clean Up Code
    };
  }, []); // componentWillUnmount

  return (
    <>
      {products.length &&
        products.map(({ name, preview }) => (
          <>
            <img src={preview} width="200" />
            <h1>{name}</h1>
          </>
        ))}
    </>
  );
};

export default Products;
