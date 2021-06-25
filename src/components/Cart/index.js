import React from "react";
import { connect } from "react-redux";

const Cart = ({ cart }) => {
  const getTotal = () => {
    return cart.reduce(
      (acc, item) => acc + Number(item.price) * Number(item.quantity),
      0
    );
  };
  return (
    <>
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
    </>
  );
};

const mapStateToProps = (store) => ({
  cart: store.prodReducer.cart,
});

export default connect(mapStateToProps, null)(Cart);
