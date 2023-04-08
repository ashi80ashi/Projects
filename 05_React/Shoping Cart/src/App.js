import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from"./pages/Cart"
import { Route,Routes } from "react-router-dom";
const App = () => {
  return (
  <div>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  </div>
    );
};

export default App;
