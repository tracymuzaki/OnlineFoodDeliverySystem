import { Link } from "react-router-dom";
import "./menu.css";
// import { useState, useEffect } from "react";

export function Breakfast() {
  // const [subcategories, setSubCategories] = useState([]);
  // useEffect(() => {
  //   function fetchAllSubCategories() {
  //     fetch("http://127.0.0.1:5000/subcategories/", {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //         "Access-Control-Allow-Origin": "*",
  //       },
  //     })
  //       .then((response) => response.json())
  //       .then((data) => {
  //         setSubCategories(data.data);
  //         console.log(data.data);
  //       })
  //       .catch((error) => {
  //         console.error(error);
  //       });
  //   }
  //   fetchAllSubCategories();
  // }, []);
  return (
    <div class="breakfastContainer">
      <div className="breakfastcontainer">
        <div className="breakfastcolumn1">
          <Link to="/tea">
            <h2>Tea</h2>
            <img src="./images/tea_main.jpg" alt="tea" />
          </Link>
        </div>
        <div className="breakfastcolumn1">
          <Link to="/snacks">
            <h2>Snacks</h2>
            <img src="./images/snacks_main.jpg" alt="snacks" />
          </Link>
        </div>

        <div className="breakfastcolumn1">
          <Link to="/katogo">
            <h2>Katogo</h2>
            <img src="./images/katogo_main.jpg" alt="katogo" />
          </Link>
        </div>
        <div className="breakfastcolumn1">
          <Link to="/drinks">
            <h2>Drinks and Beverages</h2>
            <img src="./images/drinks_main.jpg" alt="Drinks" />
          </Link>
        </div>
      </div>
    </div>
  );
}
