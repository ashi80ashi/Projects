import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useEffect, useState } from "react";
import { removeAll } from "../redux/Slices/cartSlice";
import { useDispatch } from "react-redux";

const Cart = () => {
  const {cart} = useSelector((state) => state);
  const dispatch = useDispatch();

  const [totalamount, settotalamount] = useState(0);

  useEffect(()=>{
    settotalamount(cart.reduce((acc,curr)=>acc+curr.price,0))
  },[cart])

  return( 
  <div>
   {
    cart.length > 0 ? 

    <div className="flex justify-evenly flex-col lg:flex-row">
   
   <div className="lg:w-2/4  flex flex-wrap  justify-center bg-slate-500">
   { cart.map((item) => (<CartItem key={item.id} item={item} />))}
   </div>

    <div className=" px-20 w-2/4 flex flex-col items-start justify-evenly max-h-screen text-xl font-semibold">
      <div>Your Cart</div>
      <button className="bg-slate-400 border-2 border-slate-800 px-5 rounded-md" onClick={()=>{dispatch(removeAll())}} >remove All</button>
      <div>
        <div>total items : <span className="font-bold">{cart.length}</span></div>
        <div>total amount : <span className="font-bold">Rs.{totalamount}</span></div>
      </div>
      <button className="bg-slate-400 border-2 border-slate-800 px-5 rounded-md " >checkOut</button>
    </div>

    </div>
    : 
    <div className="flex flex-col items-center justify-center gap-8 text-xl font-bold h-screen">
      <h2 >Empty Cart</h2>
      <div className="font-extrabold text-5xl">&#128577;</div>
      <NavLink to="/" className="bg-slate-200 px-3 rounded-lg border-2 border-slate-600">Shop Now</NavLink>
    </div>
   }
  </div>
);
}
export default Cart;
