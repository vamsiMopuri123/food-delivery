import logo from './logo.svg';
import './App.css';
import Navbar from './components/NavBar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import PlaceOrder from './Pages/PlaceOrder';
import Footer from './components/Footer';
import { useState } from 'react';
import LoginPopUp from './components/LoginPopUp';

function App() {
  const [logIn,setLogIn] = useState(false);
  return (
    <>
    {logIn?<LoginPopUp setLogIn={setLogIn}/>:<></>}
    <div className="App">
      <BrowserRouter>
       <Navbar setLogIn={setLogIn}/>
       <Routes>
        <Route path='/' element={<Home/>} />
        <Route path="/cart" element={<Cart/>}/>
        <Route path='/order' element={<PlaceOrder/>}/>
       </Routes>
      </BrowserRouter>
     
    </div>
     <Footer />
     </>
  );
}

export default App;
