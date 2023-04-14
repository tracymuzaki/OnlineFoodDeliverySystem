import React from "react";

function SnackItems() {
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
      <div className="snackscontainer">
        <div className="snackcolumn1">
          <h2>Scrambled Eggs</h2>
          <img src="./images/flied eggs.jpeg" alt="scrambled eggs" />
          <p>Price: 2000UGX</p>
          <button>Order</button>
          <br></br>

          <h2>Samosas</h2>
          <img src="./images/samosas.png" alt="samosas" />
          <p>Price: 2000UGX</p>
          <button>Order</button>
        </div>
        <div className="snackcolumn2">
          <h2>Sausages</h2>
          <img src="./images/sausages.jpg" alt="sausages" />
          <p>Price: 2000UGX</p>
          <button>Order</button>

          <h2>Chapatti</h2>
          <img src="./images/chapati.jpg" alt="chappatis" />
          <p>Price: 2000UGX</p>
          <button>Order</button>
        </div>
      </div>
    </div>
  );
}
export default SnackItems;
