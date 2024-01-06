import React, { useContext } from "react";
import "./ProductDisplay.css";
import startIcon from "../Assets/star_icon.png";
import startDullIcon from "../Assets/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContex";

const ProductDisplay = (props) => {
  const { product } = props;
const {addToCart} = useContext(ShopContext);

  return (
    <div className="productdisplay">
      <div className="display-left">
        {/* <div className="display-image">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div> */}
        <div className="product-display-image">
          <img
            src={product.image}
            alt=""
            className="product-display-main-image"
          />
        </div>
      </div>
      <div className="display-right">
        <h1>{product.name}</h1>
        <div className="display-right-start">
          <img src={startIcon} alt="" />
          <img src={startIcon} alt="" />
          <img src={startIcon} alt="" />
          <img src={startIcon} alt="" />
          <img src={startDullIcon} alt="" />
          <p>(122)</p>
        </div>
        <div className="display-right-product-prices"></div>
        <div className="product-display-old-price">${product.old_price}</div>
        <div className="product-display-new-prices">${product.new_price}</div>
        <div className="procut-right-display-decription">wait is ove guys</div>
        <div className="product-display-right-size">
          <h1>select size</h1>
          <div className="displayright-size">
            <div>S</div>
            <div>M</div>
            <div>l</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button onClick={()=>{addToCart(product.id)}} >Add to cart</button>
        <p className="right-display-category"><span>Category:</span> Women, T-shirt, Top crop </p>
        <p className="right-display-category"><span>Tags:</span> Modern , Latest </p>
        
      </div>
    </div>
  );
};
export default ProductDisplay;
