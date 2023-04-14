import React from "react";
import { Link } from "react-router-dom";
import "./menu.css";

export function Dinner() {
  // fetch("http://127.0.0.1:5000/users/", {
  //   method: "GET",
  //   headers: {
  //     "Content-Type": "application/json",
  //     "Access-Control-Allow-Origin": "*",
  //   },
  // })
  //   .then((response) => response.json())
  //   .then((data) => {
  //     console.log(data);
  //   })
  //   .catch((error) => {
  //     console.error(error);
  //   });
  return (
    <div className="dinnerContainer">
      <div className="dinnerCategories">
        <div className="dinnercolumn1">
          <Link to="/wines">
            <h2>Wines</h2>
            <img src="./images/wines_main.jpg" alt="wine" />
          </Link>
        </div>

        <div className="dinnercolumn2">
          <Link to="/desserts">
            <h2>Desserts</h2>
            <img src="./images/dessert_main.jpg" alt="dessert" />
          </Link>
        </div>

        <div className="dinnercolumn3">
          <Link to="/appetizers">
            <h2>Appetizers</h2>
            <img src="./images/appetizers_main.jpg" alt="appetizer" />
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Dinner;
