import React from "react";


function KatogoItems(){
    return(
        <div>
            
            <div className="katogocontainer">

               <div className="katogocolumn1">
                 <h2>matooke/offals</h2>
                <img src="./images/offals.jpeg" alt=""/>
                <p>Price: $150</p>
                <button>Order</button>
               </div>
    
               <div className="katogocolumn2">
                <h2>matooke/ gnuts</h2>
                <img src="./images/gnuts.jpeg" alt=""/>
                <p>Price: $100</p>
                <button>Order</button>
              </div>

              <div className="katogocolumn3">
                 <h2>Irish/beef</h2>
                 <img src="./images/irish.jpeg" alt=""/>
                <p>Price: $150</p>
                <button>Order</button>
              </div>

            </div>
            
        </div>
    )
}
export default KatogoItems;