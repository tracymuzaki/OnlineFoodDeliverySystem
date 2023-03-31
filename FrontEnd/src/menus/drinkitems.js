import React from "react";


function Drinks(){
    return(
        <div>
            <div className="drinkscontainer">
               <div className="drinkscolumn1">
                 <h2>All Fruit Juice</h2>
                <img src="./images/juice.jpg" alt="juice"/>
                <p>Price: $100</p>
                <button>Order</button>

                <h2>Smoothies and shakes</h2>
                <img src="./images/smoothies and shakes.jpg" alt="smoothies and shakes"/>
                <p>Price: $150</p>
                <button>Order</button>

               </div>
              
               <div className="drinkscolumn2">
                <h2>sodas</h2>
                <img src="./images/sodas 1.jpeg" alt="Sodas"/>
                <p>Price: $200</p>
                <button>Order</button>

                <h2>Water</h2>
                <img src="./images/water.jpeg" alt="Drinking Water"/>
                <p>Price: $100</p>
                <button>Order</button>

                </div>
            </div>

        </div>
    )
}
export default Drinks;