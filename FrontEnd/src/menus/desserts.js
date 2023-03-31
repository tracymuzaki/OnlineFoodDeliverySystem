import React from "react";


function Desserts(){
    return(
        <div>
          
            <div className="dessertscontainer">
            
              <div className="dessertscolumn1">
                <h2>Cakes</h2>
                <img src="./images/cakes.jpg" alt="Cakes"/>
                <p>Price: $150</p>
                <button>Order</button>
             </div>

              
              <div className="dessertscolumn1">
                <h2>Cookies</h2>
                <img src="./images/cookies.jpg" alt="Cookies"/>
                <p>Price: $100</p>
                <button>Order</button>
             </div>
  
             <div className="dessertscolumn3">
                <h2>Custards and Puddings</h2>
                <img src="./images/puddings.jpg" alt="Custards and Puddings"/>
                <p>Price: $250</p>
                <button>Order</button>
             </div>
            </div>
            
        </div>
    )
}
export default Desserts;