import "./Category.css";
import React from 'react'
import { useNavigate } from "react-router-dom";
export default function Category({ categories }) {
    const navigate = useNavigate();
    return (
        <div className="main-category">
            <h1>CATEGORIES</h1>
            <div className="categories">
                {categories?.data?.map((item) => (
                    <div
                        key={item.id}
                        className="category" onClick={()=> navigate(`/category/${item.id}`)}
                    >
                        <img
                            src={
                                process.env.REACT_APP_DEV_URL +
                                item.attributes.img.data.attributes.url
                            }
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
