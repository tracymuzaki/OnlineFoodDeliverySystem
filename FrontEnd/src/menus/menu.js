import { Link } from "react-router-dom";
import "./menu.css";

export function Menu() {
  fetch("http://127.0.0.1:5000/users/", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error(error);
    });

  return (
    <div>
      <div className="menucontainer">
        <div className="menucolumn1">
          <Link to="/breakfast">
            <h2>Breakfast</h2>
            <img src="./images/breakfast.jpg" alt="white wines" />
          </Link>
        </div>

        <div className="menucolumn1">
          <Link to="/lunch">
            {" "}
            <h2>Lunch</h2>
            <img src="./images/lunch_main.jpg" alt="lunch" />
          </Link>
        </div>

        <div className="menucolumn1">
          <Link to="/dinner">
            <h2>Dinner</h2>
            <img src="./images/dinner_main.jpg" alt="Dinner" />
          </Link>
        </div>
      </div>
    </div>
  );
}
