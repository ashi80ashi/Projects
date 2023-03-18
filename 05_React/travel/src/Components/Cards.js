import Card from "./Card"
function Cards({data,removecard}) {

    return(
        <div className="box-border  p-12 bg-gray-200 grid  gap-12 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3">
        {data.map((obj)=>(
            <Card key={obj.id}  id={obj.id} name={obj.name} info={obj.info} img={obj.image} price={obj.price} removecard={removecard}/>
        ))}
        </div>
        );
}
export default Cards;