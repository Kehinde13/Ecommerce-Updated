import React, { useState } from "react";
import burger from "../assets/icon-menu.svg";
import logo from "../assets/logo.svg";
import cart from "../assets/icon-cart.svg";
import avatar from "../assets/image-avatar.png";
import close from "../assets/icon-close.svg";
import delIcon from "../assets/icon-delete.svg";
import product1 from "../assets/image-product-1-thumbnail.jpg";

function NavBar(props) {
  const [navBar, setNavBar] = useState(false);
  const [basket, setBasket] = useState(false);

  function toggleNav() {
    setNavBar(!navBar);
  }

  function toggleBasket() {
    setBasket(!basket);
  }

  return (
    <div>
      <div className="nav">
        <div className="navLogo">
          <div className="burger" onClick={toggleNav}>
            <img src={burger} alt="burger" />
          </div>
          <div className="logo">
            <img src={logo} alt="" />
          </div>
        </div>

        <ul>
          <li>Collections</li>
          <li>Men</li>
          <li>Women</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <div className="profile">
          <div className="cartIcon" onClick={toggleBasket}>
            {props.count === 0 ? " " : <p>{props.addCart && props.count}</p>}
            <img src={cart} alt="" />
          </div>
          <div className="avatar">
            <img src={avatar} alt="" />
          </div>
        </div>
      </div>

      <hr />
      {navBar && (
        <div className="sidebar">
          <img src={close} alt="" onClick={toggleNav} />
          <ul>
            <li>Collections</li>
            <li>Men</li>
            <li>Women</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      )}

      {basket && (
        <div className="cart">
          <div className="toggleBasket">
            <h3>Cart</h3>
            <img src={close} alt="" onClick={toggleBasket} />
          </div>

          <hr />

          {!props.count ? (
            <p className="empty">Your cart is empty</p>
          ) : (
            <>
              {props.count && props.addCart && (
                <>
                  <div className="basket">
                    <img src={product1} alt="" className="product1" />
                    <div>
                      <p>Fall Limited Edition Sneakers</p>
                      <p>
                        $125.00 * {props.count} <b>${125.0 * props.count}.00</b>
                      </p>
                    </div>
                    <img
                      src={delIcon}
                      alt=""
                      className="del"
                      onClick={props.empty}
                    />
                  </div>

                  <button onClick={toggleBasket} className="cartButton">
                    Checkout
                  </button>
                </>
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default NavBar;
