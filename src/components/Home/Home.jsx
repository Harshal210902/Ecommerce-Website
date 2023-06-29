import { useEffect, useContext } from "react";
import "./Home.css";
import Banner from "./Banner/Banner"
import React from 'react'
import Category from "./Category/Category";
import Products from "../Products/Products"
import { fetchDataFromApi } from "../../utils/api";
import { Context } from "../../utils/context";

export default function Home() {
  const { categories, setCategories, products, setProducts } = useContext(Context);

  useEffect(()=>{
    getProducts();
    getCategories();
  }, []);
 
  const getProducts = () => {
    fetchDataFromApi("/api/products?populate=*").then((res) => {
      console.log(res.data);
      setProducts(res);
    });
  };


  const getCategories = () => {
    fetchDataFromApi("/api/categories?populate=*").then((res) => {
      console.log(res);
      setCategories(res);
    });
  };


  return (
    <div>
        <Banner/>
        <div className="main-content">
            <div className="layout">
                <Category categories={categories} />
                <Products products={products} />
            </div>
        </div>
    </div>
  )
}
