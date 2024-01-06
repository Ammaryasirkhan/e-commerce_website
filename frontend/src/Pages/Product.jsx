import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContex';
import { useParams } from 'react-router-dom';
import BreadCrums from '../Components/Bread/BreadCrums';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../Components/Descriptionbox/DescriptionBox';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';

const Product = () => {
  const { allProducts } = useContext(ShopContext); // Correct variable name
  const { productId } = useParams();
  const product = allProducts.find((e) => e.id === Number(productId));
   // Correct variable name
  return (
    <div>
      <BreadCrums product={product} />
      <ProductDisplay product={product}/>
      <DescriptionBox/>
      <RelatedProducts/>
    </div>
  );
};

export default Product;
