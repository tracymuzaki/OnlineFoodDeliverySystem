import React from "react";

function Desserts() {
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
      <div className="dessertscontainer">
        <div className="dessertscolumn1">
          <h2>Cakes</h2>
          <img src="./images/cakes.jpg" alt="Cakes" />
          <p>Price: 30000UGX</p>
          <button>Order</button>
        </div>

        <div className="dessertscolumn1">
          <h2>Cookies</h2>
          <img src="./images/cookies.jpg" alt="Cookies" />
          <p>Price: 15000UGX</p>
          <button>Order</button>
        </div>

        <div className="dessertscolumn3">
          <h2>Custards and Puddings</h2>
          <img src="./images/puddings.jpg" alt="Custards and Puddings" />
          <p>Price: 20000UGX</p>
          <button>Order</button>
        </div>
      </div>
    </div>
  );
}
export default Desserts;
