import React from "react";

function Wines() {
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
    <div>
      <div className="winescontainer">
        <div className="winescolumn1">
          <h2>White Wines</h2>
          <img src="./images/white wines.jpg" alt="white wines" />
          <p>Price: 25000UGX</p>
          <button>Order</button>
        </div>

        <div className="winescolumn1">
          <h2>Red Wines</h2>
          <img src="./images/red wines.jpg" alt="Red wines" />
          <p>Price: 25000UGX</p>
          <button>Order</button>
        </div>

        <div className="winescolumn1">
          <h2>Rose Wines</h2>
          <img src="./images/rose wines.jpg" alt="Rose wines" />
          <p>Price: 25000UGX</p>
          <button>Order</button>
        </div>
      </div>
    </div>
  );
}
export default Wines;
