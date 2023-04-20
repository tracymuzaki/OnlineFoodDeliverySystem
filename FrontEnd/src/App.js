import './App.css';
import Navbar from './navbar';
import Footer from './footer';
import LandingPage from './landingpage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RegisterForm } from './forms/register';
import Grains from './Chart/grains';
import Soups from './Chart/soups';
import Fruits from './Chart/fruits';
import Teatype from './Chart/tea';
import Snacktype from './Chart/snacks';
import Katogotype from './Chart/katogo';
import Drinktype from './Chart/drinks';
import { LoginForm } from './forms/login';
import { AdminLogin } from './forms/admin';
import { Menu } from './menus/menu';
import { NoPage } from "./nopage";
import { Lunch } from './menus/lunch';
import { Breakfast } from './menus/breakfast';
import { Dinner } from './menus/dinner'
import './App.css'
import TeaItems from './menus/teaitems';
import SnackItems from './menus/snackitems';
import Drinks from './menus/drinkitems';
import KatogoItems from './menus/katogoitems';
// import Soups from './Chart/soups';
// import Grains from './/grains';
// import Fruits from './menus/fruits';
import Wines from './menus/wines';
import Desserts from './menus/desserts';
import Appetizers from './menus/appetizers';
import Dash from "./dashboard/dashboardapp";
import Dashboard from "./dashboard/scenes/dashboard/index";
import Users from "./dashboard/scenes/team/index";
import Invoices from "./dashboard/scenes/invoices/index";
import Contacts from "./dashboard/scenes/contacts/index";
import Bar from "./dashboard/scenes/fooditems/index";
import Form from "./dashboard/scenes/form/index";
import Line from "./dashboard/scenes/line/index";
import Pie from "./dashboard/scenes/pie/index";
import FAQ from "./dashboard/scenes/faq/index";
import Geography from "./dashboard/scenes/location/index";
import Calendar from "./dashboard/scenes/calendar/calendar";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/invoices" element={<Invoices />} />
          <Route path="/form" element={<Form />} />
          <Route path="/fooditems" element={<Bar />} />
          <Route path="/pie" element={<Pie />} />
          <Route path="/line" element={<Line />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/location" element={<Geography />} />
          <Route path="dashboardapp" element={<Dash />} />
          <Route index element={[<Navbar />, <LandingPage />, <Footer />]} />
          <Route path="login" element={[<Navbar />, <LoginForm />, <Footer />]} />
          <Route path="admin" element={[<Navbar />, <AdminLogin />, <Footer />]} />
          <Route path="register" element={[<Navbar />, <RegisterForm />, <Footer />]} />
          <Route path="menu" element={[<Navbar />, <Menu />, <Footer />]} />
          <Route path="lunch" element={[<Navbar />, <Lunch />, <Footer />]} />
          <Route path="breakfast" element={[<Navbar />, <Breakfast />, <Footer />]} />
          <Route path="dinner" element={[<Navbar />, <Dinner />, <Footer />]} />
          <Route path="teaitems" element={[<Navbar />, <TeaItems />, <Footer />]} />
          {/* <Route path='snackitems' element={[<Navbar/>,<SnackItems/>,<Footer/>]}/>
          <Route path='katogoitems' element={[<Navbar/>,<KatogoItems/>,<Footer/>]}/>
          <Route path='drinkitems' element={[<Navbar/>,<Drinks/>,<Footer/>]}/> */}
          {/* <Route path="soups" element={<Soups/>}/>
          <Route path="grains" element={[<Navbar/>,<Grains/>,<Footer/>]}/>
          <Route path="fruits" element={[<Navbar/>,<Fruits/>,<Footer/>]}/> */}
          <Route path="wines" element={[<Navbar />, <Wines />, <Footer />]} />
          <Route path="desserts" element={[<Navbar />, <Desserts />, <Footer />]} />
          <Route path="appetizers" element={[<Navbar />, <Appetizers />, <Footer />]} />
          <Route path="grains" element={<Grains />} />
          <Route path="soups" element={<Soups />} />
          <Route path="fruits" element={<Fruits />} />
          <Route path="tea" element={<Teatype />} />
          <Route path="snacks" element={<Snacktype />} />
          <Route path="katogo" element={<Katogotype />} />
          <Route path="drinks" element={<Drinktype />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
