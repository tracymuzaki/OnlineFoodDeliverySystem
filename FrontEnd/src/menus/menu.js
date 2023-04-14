import { Link } from "react-router-dom";
import "./menu.css";
import {useEffect } from "react";

export function Menu() {
  const fetchAllCategories = () => {
    fetch("http://127.0.0.1:5000/categories/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((response) => response.json())
      .then((data) => 
        console.log((data))
     )
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    fetchAllCategories();
  }, []);
 
  return (
    <div>
      <div className="menucontainer">
        <div className="menucolumn1">
          <Link to="/breakfast">
            <h2>{categories.name}</h2>
            <img src={categories.image} alt="white wines" />
          </Link>
          </div>

        <div className="menucolumn1">
          <Link to="/lunch">
            {" "}
            <h2>Lunch</h2>
            <img src="./images/lunch_main.jpg" alt="lunch" />
          </Link>
        </div>

        <div className="menucolumn1">
          <Link to="/dinner">
            <h2>Dinner</h2>
            <img src="./images/dinner_main.jpg" alt="Dinner" />
          </Link>
        </div>
      </div>
    </div>
  );
}

// const Lunch = () => {
//   const [ fastFoodProducts,setfastFoodProducts] = useState([]);

// useEffect(() => {
//   const fetchFoodItems = async () => {
//     try{
//       const response = await fetch('http://127.0.0.1:5000/food_items/sub_food_categories/1' , {
//             method:'GET',
//               headers:{
//                 'Content-Type':'application/json',
//                 'Accept':'application/json',

//               }
//             });
//             if (!response.ok){
//               throw new Error(response.status.text);
//             }
//             const data = await response.json();
//             setfastFoodProducts(data.FoodItem);
//             localStorage.setItem('myFoodItems', JSON.stringify(data.FoodItem));
//      } catch (error) {
//       console.log(error);
//      }
//   };
//   fetchFoodItems();
//   return (
//     <div>

//           <Layout>

//       <section>
//       <Container>
//           {
//             fastFoodProducts.map(item=>(
//               <Col lg='3' >
//                 <div className="single_product">
//                       <div className="product_img">
//                         <img src={item.image} alt='' className="w-100"/>

//                       </div>
//

//                       <h6>{item.name}</h6>
//                       <div className="d-flex align-items-center justify-content-between">
//                         <span className="price d-flex align-items-center">{item.price_unit}<span>{item.price}</span></span>
//                         {/* <span className="shopping_icon"><i class="ri-shopping-cart-line"></i></span> */}
//                     <Link to = {`/menudetails/${item.id}`}> <button className='btns main'>Order Now</button></Link>

//                       </div>
//                       </div>
//                   </div>
//               </Col>
//             ))
//           }
//         </Row>
//       </Container>
//       </section>
//     </Layout>
//     </div>
//   )
// }

// export default Lunch
