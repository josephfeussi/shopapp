import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import { useState } from "react";
import Confirmationpage from "./pages/Confirmationpage";

function App() {

  const [order, setOrder] = useState(null)
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element= { <Home/> } ></Route>
          <Route path="/shop" element= { <Shop/> } ></Route>
          <Route path="/cart" element= { <Cart/> } ></Route>
          <Route path="/checkout" element= { <Checkout setOrder ={setOrder}  />  } ></Route>
          <Route path="/confirmationpage" element= { <Confirmationpage order ={order} /> } ></Route>/confirmationpage
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
