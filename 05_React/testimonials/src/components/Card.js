function Card({ details, leftShiftHandler , rightShiftHandler}) {
  return (
    <div  className="bg-slate-600 w-3/6 h-3/5">
      <div>
        <img className="w-64" src={details.image} alt="imageh" />
        <div></div>
      </div>

      <div>
        <p>{details.name}</p>
        <p>{details.job}</p>
      </div>

      <div>"</div>

      <div>{details.text}</div>

      <div>"</div>

      <button onClick={leftShiftHandler}>left</button>
       <button onClick={rightShiftHandler}>right</button>
    </div>
  );
}
export default Card;
