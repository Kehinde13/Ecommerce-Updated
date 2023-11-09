import React from "react";
import cart from "../assets/icon-cart.svg";

function Shop(props) {
  return (
    <div className="shop">
      <h3>SNEAKER COMPANY</h3>

      <h1>Fall Limited Edition Sneakers</h1>

      <p>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>

      <div className="price">
        <h1>$125.00</h1>
        <h3>50%</h3>
        <h2>
          <s>$250.00</s>
        </h2>
      </div>

      <div className="buttons">
        <div className="counter">
          <button onClick={props.Minus}>-</button>
          <p>{props.count}</p>
          <button onClick={props.Add}>+</button>
        </div>

        <button className="cartButton" onClick={props.addToCart}>
          <img src={cart} alt="" />
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default Shop;
