import { Link } from "react-router-dom";
import "./menu.css";

export function Breakfast() {
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
    <div class="breakfastContainer">
      <div className="breakfastcontainer">
        <div className="breakfastcolumn1">
          <Link to="/teaitems">
            <h2>Tea</h2>
            <img src="./images/tea_main.jpg" alt="tea" />
          </Link>
        </div>
        <div className="breakfastcolumn1">
          <Link to="/snackitems">
            {" "}
            <h2>Snacks</h2>
            <img src="./images/snacks_main.jpg" alt="snacks" />
          </Link>
        </div>

        <div className="breakfastcolumn1">
          <Link to="/katogoitems">
            <h2>Katogo</h2>
            <img src="./images/katogo_main.jpg" alt="katogo" />
          </Link>
        </div>
        <div className="breakfastcolumn1">
          <Link to="/drinkitems">
            <h2>Drinks and Beverages</h2>
            <img src="./images/drinks_main.jpg" alt="Drinks" />
          </Link>
        </div>
      </div>
    </div>
  );
}
