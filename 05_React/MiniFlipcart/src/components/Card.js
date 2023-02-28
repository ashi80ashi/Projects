const Card = (props)=>{
    return(
        <div class="bg-gray-200 inline-block shadow shadow-blue-500/100	m-5 w-52 h-96 flex flex-col hover:scale-105 duration-300">
        <img class="h-48 mb-5" src={props.img} alt="img" />
        <p class="font-bold	ml-1.5 text-slate-500	">{props.title}</p>
        <p class="font-bold	ml-1.5	text-slate-400 ">{props.category}</p>
        <p class="font-bold	ml-1.5	">Rs : {props.price}</p>
        </div>
    )
}
export default Card ;