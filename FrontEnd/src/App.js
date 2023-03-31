
import './App.css';
import Navbar from './navbar';
import Footer from './footer';
import LandingPage from './landingpage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RegisterForm} from './forms/register';
import Chart from './Chart/chart';
import {LoginForm} from './forms/login';
// import { Layout } from './layout';  
import {Menu} from './menus/menu';
import { About } from './about';
import { NoPage } from "./nopage";
import { Lunch } from './menus/lunch';
import{Breakfast} from './menus/breakfast';
import{Dinner} from './menus/dinner'
import './App.css'
import TeaItems from './menus/teaitems';
import SnackItems from './menus/snackitems';
import Drinks from './menus/drinkitems';
import KatogoItems from './menus/katogoitems';
import Soups from './menus/soups';
import Grains from './menus/grains';
import Fruits from './menus/fruits';
import Wines from './menus/wines';
import Desserts from './menus/desserts';
import Appetizers from './menus/appetizers';




function App() {
  return (
    <div className="App">

    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Layout />}> */}
           <Route index element={ [<Navbar/>,<LandingPage/>,<Footer />] } />
          <Route path="login" element={<LoginForm />} /> 
          <Route path="register" element={ <RegisterForm/>} />
          <Route path="menu" element={[<Navbar/>,<Menu/>,<Footer/>]} /> 
          <Route path="about" element={<About/>} /> 
          <Route path="lunch" element={[<Navbar/>,<Lunch/>,<Footer/>]} /> 
          <Route path="breakfast" element={[<Navbar/>,<Breakfast/>,<Footer/>]} /> 
          <Route path="dinner" element={[<Navbar/>,<Dinner/>,<Footer/>]} /> 
          <Route path="teaitems" element={[<Navbar/>,<TeaItems/>,<Footer/>]}/>
          <Route path='snackitems' element={[<Navbar/>,<SnackItems/>,<Footer/>]}/>
          <Route path='katogoitems' element={[<Navbar/>,<KatogoItems/>,<Footer/>]}/>
          <Route path='drinkitems' element={[<Navbar/>,<Drinks/>,<Footer/>]}/>
          <Route path="soups" element={[<Navbar/>,<Soups/>,<Footer/>]}/>
          <Route path="grains" element={[<Navbar/>,<Grains/>,<Footer/>]}/>
          <Route path="fruits" element={[<Navbar/>,<Fruits/>,<Footer/>]}/>
          <Route path="wines" element={[<Navbar/>,<Wines/>,<Footer/>]}/>
          <Route path="desserts" element={[<Navbar/>,<Desserts/>,<Footer/>]}/>
          <Route path="appetizers" element={[<Navbar/>,<Appetizers/>,<Footer/>]}/>
          <Route path="chart" element={<Chart/>}/>
          <Route path="*" element={<NoPage />} />
        {/* </Route> */}
      </Routes>
    </BrowserRouter>

     

      
    
    </div>
  );
}

export default App;
