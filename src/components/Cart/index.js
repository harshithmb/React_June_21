import React, { useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { clearCart } from "../../redux/actions";

const Cart = ({ cart, clearCartProducts, redirectHome }) => {
  const getTotal = () => {
    return cart.reduce(
      (acc, item) => acc + Number(item.price) * Number(item.quantity),
      0
    );
  };

  const placeOrder = () => {
    //call API
    clearCartProducts();
  };
  return (
    <div className="m-4">
      {redirectHome && <Redirect to="/" />}
      <h1>Cart</h1>
      {cart.length &&
        cart.map(({ name, quantity, price }) => (
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">
                {name} Rs {price} X {quantity} ={" "}
                {Number(price) * Number(quantity)}
              </h5>
            </div>
          </div>
        ))}

      <h1>Total = {getTotal()}</h1>
      <button className={"btn btn-success"} onClick={placeOrder}>
        Place Order
      </button>
    </div>
  );
};

const mapStateToProps = (store) => ({
  cart: store.prodReducer.cart,
  redirectHome: store.prodReducer.redirectHome,
});

const mapDispatchToProps = (dispatch) => ({
  clearCartProducts: () => dispatch(clearCart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
