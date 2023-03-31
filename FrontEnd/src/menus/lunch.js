

// import { editableInputTypes } from "@testing-library/user-event/dist/utils";
// import { useState } from "react";
// import { Link } from "react-router-dom";
 import './menu.css'

import Lunchcategories from "./lunchcategories";

export function Lunch(){
  
  
  return(
       <div className="lunchContainer">
           {/* <Soups/> <br></br><br></br>
           <Grains/><br></br><br></br>
           <Fruits/> */}
           <Lunchcategories/>
        </div>

 
)
};