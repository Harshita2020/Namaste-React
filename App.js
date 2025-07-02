import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./assets/res-logo.jpg";

/**
 *
 * - Header
 *    - Logo
 *    - Nav Items
 * - Body
 *    - Search
 *    - Resaurant Container
 *      - Res cards
 *        - Image
 *        - name of res
 *        - rating, cuisine,
 * - Footer
 *    - CopyRight
 *    - Links
 *    - Address
 *    - Contact
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://cdn.vectorstock.com/i/1000x1000/58/02/logo-restaurant-food-orange-color-vector-22725802.webp"
          alt="Logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          {" "}
          {/* className="navul" */}
          <li>Home</li>
          <li>About Us</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};


 const RestaurantCard = () => {
  return (
    <div className="res-card" >
      <img className="res-logo" alt="res-logo" src = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2025/6/6/5f5b503d-cd27-4eb8-8ffe-0faf1a5716c4_02c2beab-d74d-4cc4-9569-4dd1cc785959.jpg"/>
      <h3>Meghna Foods</h3>
      <p className="res-cuisine">Biryani, North Indian, Asian</p>
      <h4>4.4 stars</h4>
      <h4>38 minutes</h4>
    </div>
  )
 }
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
      </div>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body/>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
