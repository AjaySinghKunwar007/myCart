import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./styles/app.scss";
import Home from "./components/Home";
import Header from "./components/Header";
import { Toaster } from "react-hot-toast";
import Cart from "./components/Cart";

function App() {
  return (
 <><div>
  <Router>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/> 
      <Route path="/cart" element={<Cart/>}/> 
    </Routes>
    <Toaster />
  </Router>
 </div>
 </>   
  );
}

export default App;
