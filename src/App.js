import './App.css';
import { Route, BrowserRouter as Router, Routes ,Outlet} from 'react-router-dom';
import Signup from './pages/Signup';
import Navigationbar from './pages/Navigationbar';
import Home from './pages/Home';
import Library from './pages/Library2';
import About from './pages/About';
import Login from './pages/Login';
import Feedback from 'react-bootstrap/esm/Feedback';
import Help from './pages/Help';
import Payment from './pages/Payment';
import Invoice from './pages/Invoice';
import Shelf from './pages/Shelf';
import Cart from './pages/Cart';
import { useState } from 'react';
import Description from './pages/Description';
import AddProduct from './pages/AddProduct2';
import PublisherProduct from './pages/PublisherProduct';
import Edit from './pages/Edit';
import Profile from './pages/Profile';

function App() {

  const [products,setProducts]=useState([]);
  // const Products = [
  //   { id: 101, title: "The Alchemist", type: "e-Book", price: 250 },
  //   { id: 102, title: "The Hindu", type: "e-Book", price: 350 },
  //   { id: 103, title: "The coaliation years", type: "e-Book", price: 450 },
  //   { id: 104, title: "The Turbulent years", type: "e-Book", price: 500 },
  //   { id: 105, title: "The Turbulent years2", type: "e-Book", price: 1000 },
  //   { id: 106, title: "The presediantial years", type: "e-Book", price: 2000 }]

  const updateCart=(Prod)=>{
    setProducts(Prod);
  }
  return (
    <div className="App" style={{paddingTop:"0px"}}>
      <Router>
        <Routes>
           <Route exact path="/" element={<Navigationbar/>}></Route>
            <Route index element={<Home/>}></Route>
            <Route path='/Profile' element={<Profile/>}></Route>
            <Route path='/Library' element={<Library/>}></Route>
            <Route path='/AddProduct' element={<AddProduct/>}></Route>
            <Route path='/PublisherProduct/:Id' element={<PublisherProduct/>}></Route>
            <Route path='/Edit/:Id' element={<Edit/>}></Route>
            <Route path='/About' element={<About/>}></Route>
            <Route path='/Signup' element={<Signup/>}></Route>
            <Route path='/Login' element={<Login/>}></Route>
            <Route path='/Feedback' element={<Feedback/>}></Route>
            <Route path='/Help' element={<Help/>}></Route>
            <Route path='/Shelf' element={<Shelf/>}></Route>
            <Route path='/Cart' element={<Cart/>}></Route>
            <Route path='/Description/:id' element={<Description/>}></Route>
            <Route path='/Payment' element={<Payment prod={products}/>}/>

            <Route path='/Invoice' element={<Invoice prod={products}/>}> </Route> 
         
        </Routes>
      </Router>
    </div>
  );
}

export default App;
