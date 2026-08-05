import React from "react";
import "././NewArrivals.css";

// import product1 from "../assets/product1.png";
// import product2 from "../assets/product2.png";
// import product3 from "../assets/product3.png";
// import product4 from "../assets/product4.png";
// import product5 from "../assets/product5.png";
// import product6 from "../assets/product6.png";

import { FiHeart, FiArrowRight } from "react-icons/fi";

const products = [
  {
    id: 1,
    // image: product1,
    name: "Cotton Polo T-Shirt",
    price: "$29.99",
  },
  {
    id: 2,
    // image: product2,
    name: "Linen Casual Shirt",
    price: "$39.99",
  },
  {
    id: 3,
    // image: product3,
    name: "Slim Fit Jeans",
    price: "$49.99",
  },
  {
    id: 4,
    // image: product4,
    name: "Utility Jacket",
    price: "$79.99",
  },
  {
    id: 5,
    // image: product5,
    name: "Oversized T-Shirt",
    price: "$24.99",
  },
  {
    id: 6,
    // image: product6,
    name: "Essential Hoodie",
    price: "$59.99",
  },
];

function NewArrivals() {
  return (
    <section className="arrivals">
      <div className="arrivals-header">
        <h3>NEW ARRIVALS</h3>

        <button className="view-btn">
          View All <FiArrowRight />
        </button>
      </div>

      <div className="product-grid">
        {products.map((item) => (
          <div className="card" key={item.id}>
            <div className="image-box">
              <img src={item.image} alt={item.name} />

              <button className="wishlist">
                <FiHeart />
              </button>
            </div>

            <h4>{item.name}</h4>
            <p>{item.price}</p>

            <div className="colors">
              <span className="black"></span>
              <span className="gray"></span>
              <span className="light"></span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default NewArrivals;