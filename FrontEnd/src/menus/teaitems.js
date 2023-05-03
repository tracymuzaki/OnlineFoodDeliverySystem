import React from "react";
import { useState, useEffect } from "react";

function TeaItems() {
  const [fooditems, setFoodItem] = useState([]);
  useEffect(() => {
    function fetchAllFoodItems() {
      fetch("http://127.0.0.1:5000/food_items/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setFoodItem(data.data);
          console.log(data.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
    fetchAllFoodItems();
  }, []);
  return (
    <div>
      <div className="teacontainer">
      {fooditems.map((fooditem) => (
        <div className="teacolumn1">
          <h2 key={fooditem.id}>{fooditem.name}</h2>
          <img src={fooditem.image} alt="milk" />
          <p>Price - {fooditem.price}{fooditem.price_unit}</p>
          <button>Order</button> 

          {/* <h2 key={fooditem.id}>{fooditem.name}</h2>
          <img src={fooditem.image} alt="cappiccino" />
          <p>Price: {fooditem.price}{fooditem.price_unit}</p>
          <button>Order</button> */}
        </div>
        ))} 

        {/* <div className="teacolumn1">
          <h2>African Tea</h2>
          <img src="./images/africantea.jpeg" alt="African tea" />
          <p>Price: 3000UGX</p>
          <button>Order</button>

          <h2>Turkisk coffee</h2>
          <img src="./images/turkishcoffee.jpg" alt="turkish coffee" />
          <p>Price: 10000UGX</p>
          <button>Order</button>
        </div> */}
      </div>
    </div>
  );
}
export default TeaItems;
