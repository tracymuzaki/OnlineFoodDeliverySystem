// import { useState } from "react";
import { Link } from "react-router-dom";
import './menu.css'

function Breakfastsubcategories(){
  return(
    <div>
    
    <div className="subcategoriescontainer">
    
      <div className="subcategoriescolumn1">
        <Link to="/teaitems"><h2>TEA</h2>
        <img src="./images/breakfast.jpg" alt="tea"/>
        </Link>
        </div>
        <div className="subcategoriescolumn1">
       <Link to="/snackitems"> <h2>SNACKS</h2>
       <img src="./img/buffetug.jfif" alt="snacks"/>
       </Link>
        
      </div>

      <div className="subcategoriescolumn1">
        <Link to="/katogoitems"><h2>KATOGO</h2>
        <img src="./img/cafech.jpg" alt="katogo"/>
        </Link>
       </div>
        <div className="subcategoriescolumn1">
        <Link to="/drinkitems"><h2>DRINKS AND BEVERAGES</h2>
        <img src="./img/cafech.jpg" alt="Drinks"/>
        </Link>
       
     </div>


  </div>
    
</div>
)
}
export default Breakfastsubcategories;