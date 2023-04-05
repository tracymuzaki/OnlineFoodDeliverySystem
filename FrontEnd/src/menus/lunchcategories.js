import { Link } from "react-router-dom";
import './menu.css'

function Lunchcategories(){
  return(
    <div>
    
    <div className="lunchCategories">
    
      <div className="lunchcolumn1">
        <Link to="/soups"><h2>Soups</h2>
        <img src="./images/breakfast.jpg" alt="tea"/> 
        </Link>
      </div>

      <div className="lunchcolumn2">
       <Link to="/grains"><h2>Grains</h2>
       <img src="./img/buffetug.jfif" alt="snacks"/>
       </Link>
        
       </div>

      <div className="lunchcolumn3">
        <Link to="/fruits"><h2>Fruits</h2>
        <img src="./img/cafech.jpg" alt="katogo"/>
        </Link>
       

       </div>


  </div>
    
</div>
)
}
export default Lunchcategories;