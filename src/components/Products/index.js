import axios from "axios";
import React, { useState, useEffect } from "react";
import "../../App.css";

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
    <div className={"d-flex flex-wrap justify-content-center"}>
      {products.length &&
        products.map(({ name, preview, id, description }) => (
          <div class="card m-2" style={{ width: "18rem" }} key={id}>
            <img class="card-img-top" src={preview} alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title">{name}</h5>
              <p class="card-text card-para">{description}</p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        ))}
    </div>
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
