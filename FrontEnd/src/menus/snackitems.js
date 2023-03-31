import React from "react"


function SnackItems(){
    return(
        <div>
            
            <div className="snackscontainer">
                <div className="snackcolumn1">
                    
                    <h2>scrambled eggs</h2>
                    <img src="./images/flied eggs.jpeg" alt="scrambled eggs"/>
                    <p>Price: $80</p>
                    <button>Order</button>
                    

                    <h2>samosas</h2>
                    <img src="./images/samosas.png" alt="samosas"/>
                    <p>Price: $80</p>
                    <button>Order</button>
                </div>
                <div className="snackcolumn2">

                    <h2>sausages</h2>
                    <img src="./images/sausages.jpg" alt="sausages"/>
                    <p>Price: $80</p>
                    <button>Order</button>

                    <h2>chapatti</h2>
                    <img src="./images/chapati.jpg" alt="chappatis"/>
                    <p>Price: $80</p>
                    <button>Order</button>
                </div>
            </div>

                
            
        </div>
    )
}
export default SnackItems;