import { useDispatch, useSelector } from "react-redux";
import { add,remove } from "../redux/Slices/cartSlice";

const Cards = ({element})=>{

  const {cart} = useSelector((state)=>state);  
  const dispatch = useDispatch();

  const removetocart = ()=>{
    dispatch(remove(element.id));
  }
  const addtocart = ()=>{
    dispatch(add(element));
  }
  return(
      <div className="bg-white rounded-md shadow-lg shadow-slate-950	m-5 p-5 w-64  flex flex-col justify-between hover:scale-105 duration-300">
      <img className="h-48 mb-5" src={element.image} alt="img" />
      <p className="font-bold	ml-1.5 text-slate-500	">{element.title}</p>
      <p className="font-bold	ml-1.5	text-slate-400 ">{element.category}</p>
      <p className="font-bold	ml-1.5	">Rs : {element.price}</p>
      <button className="border-2  bg-slate-300 shadow-inner shadow-black p-1 rounded-md  font-bold">
        {
          cart.some((p)=>p.id===element.id)
           ? 
          <button  className="w-full" onClick={removetocart}>Remove Item</button>
          :
          <button className="w-full" onClick={addtocart}>Add to cart</button>
        }
      </button>
      </div>
  )
}
export default Cards ;