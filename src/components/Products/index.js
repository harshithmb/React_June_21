import axios from "axios";
import React, { useState, useEffect } from "react";
import "../../App.css";
import { Link } from "react-router-dom";
//Redux
import { connect } from "react-redux";
import { getProducts, addProduct } from "../../redux/actions";

const Products = ({ products, sendProducts, updateCart }) => {
  useEffect(() => {
    axios("https://5d76bf96515d1a0014085cf9.mockapi.io/product")
      .then((res) => {
        sendProducts(res.data);
      })
      .catch((err) => alert(err));
  }, []); //componentDidmount

  useEffect(() => {
    console.log("Hello Products Changes");
  }, [products]);

  return (
    <div className={"d-flex flex-wrap justify-content-center"}>
      {products.length &&
        products.map((item) => {
          const { name, preview, id, description } = item;
          return (
            <div class="card m-2" style={{ width: "18rem" }} key={id}>
              <Link
                to={{
                  pathname: `/products/${id}`,
                  preview,
                  name,
                  descriptionName: description, // use props.location
                }}
              >
                <img class="card-img-top" src={preview} alt="Card image cap" />
              </Link>
              <div class="card-body">
                <Link
                  to={{
                    pathname: `/products/${id}`,
                    preview,
                    name,
                    descriptionName: description, // use props.location
                  }}
                >
                  <h5 class="card-title">{name}</h5>
                  <p class="card-text card-para">{description}</p>
                </Link>
                <a
                  href="#"
                  class="btn btn-primary mt-3"
                  onClick={() => updateCart(item)}
                >
                  Add to Cart
                </a>
              </div>
            </div>
          );
        })}
    </div>
  );
};

const mapStateToProps = (store) => ({
  products: store.prodReducer.products,
});

const mapDispatchToProps = (dispatch) => ({
  sendProducts: (payload) => dispatch(getProducts(payload)),
  updateCart: (payload) => dispatch(addProduct(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);
