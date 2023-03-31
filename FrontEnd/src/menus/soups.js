import React from "react"


function Soups(){
    return(
        <div>
            
            <div className="soupscontainer">
                <div className="soupscolumn1">
                    <h3>chicken soup</h3>
                    <img src="./images/chicken soup.jpg" alt="chicken soup"/>
                    <p>Price: $100</p>
                    <button>Order</button>

                    <h3>vegetable soup</h3>
                    <img src="./images/vegetables.jpg" alt="vegetable soup"/>
                    <p>Price: $50</p>
                    <button>Order</button>
                </div>
                <div className="soupcolumn2">

                    <h3>Tomato soup</h3>
                    <img src="./images/tomato soup.jpg" alt="Tomato soup"/>
                    <p>Price: $50</p>
                    <button>Order</button>

                    <h3>mushroom soup</h3>
                    <img src="./images/mushroom soup.jpg" alt="mushroom soup"/>
                    <p>Price: $50</p>
                    <button>Order</button>
                </div>
            </div>
        </div>
    )
}
export default Soups;
