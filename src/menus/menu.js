import { Link } from "react-router-dom";
import "./menu.css";
import { useState, useEffect } from "react";

export function Menu() {
  // const [categories, setCategories] = useState([]);
  // useEffect(() => {
  //   function fetchAllCategories() {
  //     fetch("http://127.0.0.1:5000/categories/", {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //         "Access-Control-Allow-Origin": "*",
  //       },
  //     })
  //       .then((response) => response.json())
  //       .then((data) => {
  //         setCategories(data.data);
  //         console.log(data.data);
  //       })
  //       .catch((error) => {
  //         console.error(error);
  //       });
  //   }
  //   fetchAllCategories();
  // }, []);

  // return (
  //   <div>
  //     {/* {categories.map((category,index) => ( */}
  //       <div className="menucontainer">  
  //         {/* {categories.map((category) => ( */}
  //           <div className="menucolumn1">
  //             <Link to="/breakfast">
  //               <h2>{category.name}</h2>
  //               <img src={category.image} alt="breakfast" />
  //             </Link>
  //           </div> 
  //         {/* ))}   */}
  //         {/* {categories.map((category) => ( */}
  //           <div className="menucolumn1" >
  //             <Link to="/lunch">
  //               <h2>{category.name}</h2>
  //               <img src={category.image} alt="lunch" />
  //             </Link>
  //           </div> 
  //         {/* ))}  */}
  //         {/* {categories.map((category) => ( */}
  //           <div className="menucolumn1">
  //             <Link to="/dinner">
  //               <h2>{category.name}</h2>
  //               <img src={category.image} alt="Dinner" />
  //             </Link> 
  //           </div>  
  //         {/* ))}  */}
  //       </div>
  //     {/* ))} */}
  //   </div>
  // );
  return (
    <div>
      <div className="menucontainer">
        <div className="menucolumn1">
          <Link to="/breakfast">
            <h2>Breakfast</h2>
            <img src="./images/breakfast.jpg" alt="white wines" />
          </Link>
        </div>

        <div className="menucolumn1">
          <Link to="/lunch">
            {" "}
            <h2>Lunch</h2>
            <img src="./img/buffetug.jfif" alt="lunch" />
          </Link>
        </div>

        <div className="menucolumn1">
          <Link to="/dinner">
            <h2>Dinner</h2>
            <img src="./img/cafech.jpg" alt="Dinner" />
          </Link>
        </div>
      </div>
    </div>
  );
}
