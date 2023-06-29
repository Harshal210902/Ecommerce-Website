import "./Category.css";
import React from 'react'
import Products from "../Products/Products"
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
export default function Category() {
  const {id} = useParams();
  const {data} = useFetch(`/api/products?populate=*&[filters][categories][id]=${id}`);
  return (
    <div className="main-category">
        <div className="layout">
            <div className="category-title">{data?.data?.[0]?.attributes?.categories?.data?.[0]?.attributes?.title}</div>
            <Products sectionHeader={true} products={data}/>
        </div>
    </div>
  )
}
