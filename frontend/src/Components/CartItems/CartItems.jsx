// CartItems.js

import React, { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../../Context/ShopContex";
import removeIcon from "../Assets/cart_cross_icon.png";

const CartItems = () => {
  const { allProducts, cartItems, removeFromCart, getTotalCartItems, getTotalCartAmount } = useContext(ShopContext);

  return (
    <div className="cartitems">
      <div className="cart-items-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {allProducts.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={e.id} className="cart-items-format">
              <div className="cart-item-details">
                <img src={e.image} alt="" className="carticon-product-icon" />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className="cart-items-quantity">{cartItems[e.id]}</button>
                <p>${e.new_price * cartItems[e.id]}</p>
              </div>
              <img
                src={removeIcon}
                onClick={() => {
                  removeFromCart(e.id);
                }}
                alt=""
                className="remove-icon"
              />
            </div>
            
          );
        }
        return null;

      }
      )}
      <div className="cartitem-down">
        <div className="cart-items-total">
            <h1>Cart totals</h1>
            <div>
                <div className="cart-items-total-items">
                    <h1>Sub total</h1>
                    <h1>${getTotalCartAmount()}</h1>
                </div>
                <hr />
                <div className="cart-items-total-items">
                    <p>Shipping fee</p>
                    <p>Free</p>
                </div>
                <hr />
                <div className="cart-items-total-items">
                    <h3>Total</h3>
                    <h3>${getTotalCartAmount()}</h3>
                </div>
                <button>Proceed to check out</button>
            </div>
            <div className="cartitems-promocode">
                <p>if you have promo code put here</p>
                <div className="promobox">
                    <input type="text" placeholder="enter your promo code" id="" />
                    <button>submit</button>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
