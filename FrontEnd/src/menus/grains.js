import React from "react"


function Grains(){
    return(
        <div>
            
            <div className="grainscontainer">
                <div className="grainscolumn1">
                    <h2>Rice</h2>
                    <img src="./images/rice.jpg" alt="Rice"/>
                    <p>Price: $90</p>
                    <button>Order</button>

                    <h2>chips</h2>
                    <img src="./images/chips.jpg" alt=""/>
                    <p>Price: $100</p>
                    <button>Order</button>
                </div>
                <div className="grainscolumn2">

                    <h2>pasta</h2>
                    <img src="./images/pasta.jpg" alt=""/>
                    <p>Price: $90</p>
                    <button>Order</button>

                    
                </div>
            </div>
        </div>
    )
}
export default Grains;