import { Link } from "react-router-dom";
import "./menu.css";

export function Lunch() {
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
    <div className="lunchContainer">
      <div className="lunchCategories">
        <div className="lunchcolumn1">
          <Link to="/soups">
            <h2>Soups</h2>
            <img src="./images/soups_main.jpg" alt="soup" />
          </Link>
        </div>

        <div className="lunchcolumn2">
          <Link to="/grains">
            <h2>Grains</h2>
            <img src="./images/grains_main.jpg" alt="grains" />
          </Link>
        </div>

        <div className="lunchcolumn3">
          <Link to="/fruits">
            <h2>Fruits</h2>
            <img src="./images/fruits_main.jpg" alt="fruits" />
          </Link>
        </div>
      </div>
    </div>
  );
}
