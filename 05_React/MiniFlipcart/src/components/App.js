import Card from "./Card";
import product from "./Product.json";

function App() {
  return (
    <div class="bg-sky-200">

      <h1 class="text-2xl bg-sky-400 text-white font-extrabold	h-16	flex justify-center	items-center	">
        Mini Flipkart
      </h1>

      <div class="grid grid-cols-5">
      {
        product.map((element)=>{
          return(
            <Card title={element.title} price={element.price} category={element.category} img={element.image}/>
          )
        })
      }
      </div>

    </div>
  );
}

export default App;
