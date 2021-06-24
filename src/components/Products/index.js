import axios from "axios";
import React, { useState, useEffect } from "react";
import ErrorBoundary from "../ErrorBoundary";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [showChild, setShowChild] = useState(true);
  const [count, updateCount] = useState(0);
  const [name, setName] = useState("Sachin");

  useEffect(() => {
    axios("https://5d76bf96515d1a0014085cf9.mockapi.io/product")
      .then((res) => {
        setTimeout(() => {
          setProducts(res.data);
        }, 5000);
      })
      .catch((err) => alert(err));
    console.log("componentDidmount");
  }, []); //componentDidmount

  useEffect(() => {
    console.log("componentDidmount and DidUpdate");
  }); //componentDidmount and DidUpdate

  useEffect(() => {
    return () => {
      //clean Up Code
    };
  }, []); // componentWillUnmount

  return (
    <>
      {showChild ? (
        <ErrorBoundary>
          <Child count={count} name={name} />
        </ErrorBoundary>
      ) : (
        ""
      )}
      <button onClick={() => updateCount(count + 1)}>+</button>
      <button onClick={() => setName("Akash")}>Change Name</button>
      <button onClick={() => setShowChild(!showChild)}>SHOW/HIDE</button>
      <hr />
      {products.length &&
        products.map((item) => (
          <>
            <img src={item.preview} width="200" />
            <h1>{item.name}</h1>
            <button onClick={() => setCart([...cart, item])}>
              Add TO Cart
            </button>
          </>
        ))}
    </>
  );
};

export default Products;

const Child = ({ count, name }) => {
  const [childCount, setChildCount] = useState(count);
  useEffect(() => {
    return () => {
      console.log("Component Child Hidden");
    };
  }, []); // componentWillUnmount

  useEffect(() => {
    if (count <= 5) {
      setChildCount(count);
    }
    console.log("Count Changes", name, count);
  }, [count, name]); // Update count uptill 5

  useEffect(() => {
    console.log("Child C... didmount and didupdate");
  });

  return <h1>{count}</h1>;
};
