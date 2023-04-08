import { NavLink } from "react-router-dom";

const Navbar = () => {
  return <div className="p-6 bg-gray-600">
   
   <div className="bg-slate-200 h-14 flex justify-around rounded-lg">
  
   <div className=" w-52 relative">
      <img className=" absolute -top-3 w-20 rounded-full shadow-md shadow-black" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1GHFzicMYaZPHv7YBikNwffrogSMVnTvLsQ&usqp=CAU" alt="" />
    </div>
   
    <div className=" w-1/5 text-2xl font-bold text-blue-900 flex items-center justify-between">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/cart">Cart</NavLink>
    </div>
    
   </div>

  </div>;
};

export default Navbar;
