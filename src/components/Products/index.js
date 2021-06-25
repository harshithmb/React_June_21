import axios from "axios";
import React, { useState, useEffect } from "react";
import "../../App.css";
import { Link } from "react-router-dom";
//Redux
import { connect } from "react-redux";
import { getProducts } from "../../redux/actions";

const Products = (props) => {
  useEffect(() => {
    axios("https://5d76bf96515d1a0014085cf9.mockapi.io/product")
      .then((res) => {
        props.sendProducts(res.data);
      })
      .catch((err) => alert(err));
    console.log("componentDidmount");
  }, []); //componentDidmount

  console.log("Products", props.products);
  return (
    <div className={"d-flex flex-wrap justify-content-center"}>
      {props.products.length &&
        props.products.map(({ name, preview, id, description }) => (
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
              <div class="card-body">
                <h5 class="card-title">{name}</h5>
                <p class="card-text card-para">{description}</p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </Link>
          </div>
        ))}
    </div>
  );
};

const mapStateToProps = (store) => ({
  products: store.products,
});

const mapDispatchToProps = (dispatch) => ({
  sendProducts: (payload) => dispatch(getProducts(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);
