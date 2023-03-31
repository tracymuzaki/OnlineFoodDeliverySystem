import { Link } from "react-router-dom";
import './menu.css'

function Dinnercategories(){
  
  
    return(
      <div>
      
      <div className="dinnerCategories">
      
        <div className="lunchcolumn1">
          <Link to="/wines"><h2>Wines</h2></Link>
          <img src="./images/breakfast.jpg" alt="tea"/> 
        </div>
  
        <div className="lunchcolumn2">
         <Link to="/desserts"><h2>Desserts</h2></Link>
         <img src="./img/buffetug.jfif" alt="snacks"/>
          
         </div>
  
        <div className="lunchcolumn3">
          <Link to="/appetizers"><h2>Appetizers</h2></Link>
          <img src="./img/cafech.jpg" alt="katogo"/>
         
  
         </div>
  
  
    </div>
      
  </div>
  )
  }
  export default Dinnercategories;