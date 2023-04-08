import { useEffect,useState } from "react";
import Cards from "../components/Cards"
import Spinner from "../components/Spinner";


const Home = () => {

  const API_URL = "https://fakestoreapi.com/products";
  
  const [products, setproducts] = useState([]);
  const[loading, setloading] = useState(false);

  async function fetchdata(){
    setloading(true);
    const response = await fetch(API_URL);
    const data = await response.json();
    setproducts(data);
    setloading(false);
  }

  useEffect(()=>{
     fetchdata();
  },[])

  return (
    <div className=" bg-slate-300 flex flex-wrap justify-center ">
      {
        loading ? <div className="h-screen w-screen flex items-center justify-center bg-slate-100"><Spinner/></div>
         :
         products.map((element)=>{
          return(
            <Cards key={element.id}  element={element}/>
          )
        })
      }
    </div>
  );
};

export default Home;
