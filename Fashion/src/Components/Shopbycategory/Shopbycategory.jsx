import React from "react";
import "./ShopbyCategory.css";

// import tshirt from "../assets/tshirt.jpg";
// import shirt from "../assets/shirt.jpg";
// import jeans from "../assets/jeans.jpg";
// import jacket from "../assets/jacket.jpg";
// import sneakers from "../assets/sneakers.jpg";
// import bag from "../assets/bag.jpg";

function ShopbyCategory() {
  const categories = [
    { id: 1, title: "T-Shirts", //image: tshirt 
        },
    { id: 2, title: "Shirts", //image: shirt 
        },
    { id: 3, title: "Jeans", //image: jeans 
        },
    { id: 4, title: "Jackets", //image: jacket
         },
    { id: 5, title: "Sneakers", //image: sneakers 
        },
    { id: 6, title: "Bags", //image: bag 
        },
  ];

  return (
    <section className="shop-category">
      <div className="category-header">
        <h3>SHOP BY CATEGORY</h3>

        <button className="view-btn">
          View all <span>→</span>
        </button>
      </div>

      <div className="category-grid">
        {categories.map((item) => (
          <div className="category-card" key={item.id}>
            <img src={item.image} alt={item.title} />
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ShopbyCategory;