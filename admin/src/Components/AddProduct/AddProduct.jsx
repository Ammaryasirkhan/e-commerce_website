import React, { useState } from "react";
import "./AddProduct.css";
import uploadArea from "../../Assets/upload_area.svg";

const AddProduct = () => {
  const [image, setImage] = useState(false);
  const [productDetails, setProductDetails] = useState({
    name: "",
    image: "",
    category: "women",
    new_price: "",
    old_price: "",
  });

  const changeHandler = (e) => {
    setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        setImage(e.target.result);
      };

      reader.readAsDataURL(file);
    }
  };

  const addProduct = async () => {
    console.log(productDetails);
    let responseData;
    let product = productDetails;

    let formData = new FormData();
    formData.append("product", image);

    await fetch("http://localhost:4000/upload", {
      method: "Post",
      headers: {
        Accept: "application/json",
       
      },
      body: formData,
    }).then((resp) =>
      resp.json().then((data) => {
        responseData = data;
      })
    );
    if (responseData.success) {
      product.image = responseData.image;
      await fetch("http://localhost:4000/addproduct", {
        method: "Post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      }).then((resp) =>
        resp.json().then((data) => {
          data.success ? alert("Product added") : alert("Failed");
        })
      );
    }
  };

  return (
    <div className="addproduct">
      <div className="addproduct-item-field">
        <p>Product Title</p>
        <input
          value={productDetails.name}
          onChange={changeHandler}
          type="text"
          placeholder="type here"
          name="name"
        />
      </div>
      <div className="add-product-price">
        <div className="additem-field">
          <p>Add Price</p>
          <input
            value={productDetails.old_price}
            onChange={changeHandler}
            type="number"
            name="old_price"
            placeholder="type here"
          />
        </div>
        <div className="additem-field">
          <p>Offer Price</p>
          <input
            value={productDetails.new_price}
            onChange={changeHandler}
            type="number"
            name="new_price"
            placeholder="type here"
          />
        </div>
      </div>
      <div className="addproduct-itemfield">
        <select
          value={productDetails.category}
          onChange={changeHandler}
          name="category"
          id=""
          className="add-product-selector"
        >
          <option value="women">Women</option>
          <option value="men">Men</option>
          <option value="kid">Kid</option>
        </select>
      </div>
      <div className="add-product-item-field">
        <label htmlFor="file-input">
          {image ? (
            <img src={image} alt="Selected" />
          ) : (
            <img src={uploadArea} alt="Upload Area" />
          )}
        </label>
        <input
          type="file"
          id="file-input"
          name="image"
          onChange={handleImageChange}
        />
      </div>
      <button
        onClick={() => {
          addProduct();
        }}
        className="addbutton"
      >
        Add
      </button>
    </div>
  );
};

export default AddProduct;
