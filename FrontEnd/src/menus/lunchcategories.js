import { Link } from "react-router-dom";
import './menu.css'

function Lunchcategories(){
  
  
  return(
    <div>
    
    <div className="lunchCategories">
    
      <div className="lunchcolumn1">
        <Link to="/soups"><h2>Soups</h2></Link>
        <img src="./images/breakfast.jpg" alt="tea"/> 
      </div>

      <div className="lunchcolumn2">
       <Link to="/grains"><h2>Grains</h2></Link>
       <img src="./img/buffetug.jfif" alt="snacks"/>
        
       </div>

      <div className="lunchcolumn3">
        <Link to="/fruits"><h2>Fruits</h2></Link>
        <img src="./img/cafech.jpg" alt="katogo"/>
       

       </div>


  </div>
    
</div>
)
}
export default Lunchcategories;