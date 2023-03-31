import React from "react"
import Wines from "./wines";
import Desserts from "./desserts";
import Appetizers from "./appetizers";
import Dinnercategories from "./dinnercategories";

export function Dinner(){
    return(
        <div className="dinnerContainer">
            {/* <h1>Dinner Menu</h1> */}
            
           {/* <Wines/><br></br><br></br>
           <Desserts/><br></br><br></br>
           <Appetizers/> 
             */}
             <Dinnercategories/>

        </div>
        
    )
}
export default Dinner;