import React from "react";
import "./RelatedProducts.css";
import dataProduct from "../Assets/data";
import Items from '../Items/Items'

const RelatedProducts = () => {
  return (
    <div className="relatedproducts">
      <h1>Related Products</h1>
      <hr />
      <div className="relatedproducts-items">
        {dataProduct.map((item, i) => {
          return <Items  key={item.id}
          id={i}
          name={item.name}
          image={item.image}
          newPrice={item.new_price}
          oldPrice={item.old_price}/>
        })}
      </div>
    </div>
  );
};
export default RelatedProducts;
