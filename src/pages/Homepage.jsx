import React from 'react'
import "../styles/Homepage.css";
import Banner from "../components/Banner.jsx"
import products from "../Database/db.json";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div className="home">
       <div className="home_banner">
          <Banner/>
      </div>
      <section className="home__products">
        {products.map((product) => {
          return (
      <article key={product.id}>
        <Link to={`/products/${product.id}`}>
          <div className="appartment">
      	      <img src={product.cover} alt="" className="appartment__img" />
      	      <h2 className="appartment__title">{product.title}</h2>
          </div>
        </Link>
      </article>
          );
        })}
      </section>


    </div>
  )
}

export default Homepage