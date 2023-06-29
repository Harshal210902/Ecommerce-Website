import "./Products.css";
import React from 'react'
import Product from "./Product/Product";

export default function Products({ products,sectionHeader }) {
  return (
    <div className="product-container">
        {!sectionHeader && <div className="sec-heading">POPULAR PRODUCTS</div>}
        <div className="products">
          {products?.data?.map((item) => (
              <Product key={item.id} id={item.id} data={item.attributes} />
          ))}
        </div>
    </div>
  );
};
