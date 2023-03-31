// import { editableInputTypes } from "@testing-library/user-event/dist/utils";
import { useState } from "react";
import { Link } from "react-router-dom";
 import "./menu.css"
export function Menu(){
  
  
  return(
    <div>
    
    <div className="menucontainer">
    
       <div className="menucolumn1">
        <Link to="/breakfast"><h2>Breakfast</h2></Link>
        <img src="./images/breakfast.jpg" alt="white wines"/>
       
      </div>

      <div className="menucolumn1">
       <Link to="/lunch"> <h2>Lunch</h2></Link>
       <img src="./img/buffetug.jfif" alt="lunch"/>
        
      </div>

     <div className="menucolumn1">
        <Link to="/dinner"><h2>Dinner</h2></Link>
        <img src="./img/cafech.jpg" alt="Dinner"/>
       
     </div> 
  </div>
    
</div>
)
};