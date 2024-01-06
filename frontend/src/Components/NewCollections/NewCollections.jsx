import React from "react";
import "./NewCollections.css";
import newCollections from "../Assets/new_collections";
import Items from "../Items/Items";

const NewCollections = () => {
  return (
    <div className="newCollections">
      <h1>New Collections</h1>
      <hr />
      <div className="collections">
        {newCollections.map((item, i) => {
          return (
            <Items
              key={item.id}
              id={item.id}
              name={item.name}
              image={item.image}
              newPrice={item.new_price}
              oldPrice={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};
export default NewCollections;
