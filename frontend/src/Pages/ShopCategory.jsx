import React, { useContext } from "react";
import "./css/ShopCategory.css";
import { ShopContext } from "../Context/ShopContex";
import dropDown from "../Components/Assets/dropdown_icon.png";
import Items from "../Components/Items/Items";

const ShopCategory = (props) => {
  const { allProducts } = useContext(ShopContext);
  return (
    <div className="shopcategory">
      <img className="shopcategory-banner" src={props.banner} alt="" />
      <div className="shopcategory-banner">
        <p>
          <span>Showing 1-12</span>
        </p>
        <div className="shopcategory-sort">
          Sort By <img src={dropDown} alt="" />
        </div>
      </div>
      <div className="shop-category-products">
        {allProducts.map((item, i) => {
          if (props.category === item.category) {
            return <Items
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            newPrice={item.new_price}
            oldPrice={item.old_price}
          />
          } else {
            return null;
          }
        })}
      </div>
      <div className="exploremore">
        Explore more 
      </div>
    </div>
  );
};

export default ShopCategory;
