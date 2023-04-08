import { useDispatch } from "react-redux";
import { remove} from "../redux/Slices/cartSlice";
const CartItem = ({item}) => {
  const dispatch = useDispatch();
  return( 

  
  <div className="bg-white rounded-md shadow-lg shadow-slate-950	m-5 p-5 w-1/3 min-h-96  flex flex-col justify-between hover:scale-105 duration-300">
      <img className="h-48 mb-5" src={item.image} alt="img" />
      <p className="font-bold	ml-1.5 text-slate-500	">{item.title}</p>
      <p className="font-bold	ml-1.5	text-slate-400 ">{item.category}</p>
      <p className="font-bold	ml-1.5	">Rs : {item.price}</p>
      <button className="border-2  bg-slate-300 shadow-inner shadow-black p-1 rounded-md  font-bold" onClick={()=>{dispatch(remove(item.id))}}>remove</button>
  </div>

    )
;
};

export default CartItem;
