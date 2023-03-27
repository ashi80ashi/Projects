function Card({ details, leftShiftHandler , rightShiftHandler}) {
  return (
    <div className="bg-gradient-to-tr from-blue-500 via-indigo-500 to-purple-500 rounded-xl  w-4/6 mx-auto hover:shadow-xl hover:shadow-color-gray-800">
      
      <div className="flex flex-col justify-between items-center  h-full relative">
        
        <div className="flex justify-center items-center bg-slate-700 rounded-full w-64 h-64 absolute -top-20 ">
          <img className="rounded-full w-60 h-60 object-cover hover:scale-110 duration-200 " src={details.image} alt="imagehere" />
        </div>

        <div className=" text-center py-8 mt-40">
          <p className="text-white text-2xl font-bold tracking-wider">{details.name}</p>
          <p className="text-white text-lg">{details.job}</p>
        </div>

        <div className="text-white text-center text-xl px-8">
          <p className="mb-6">
            <div className="font-bold text-xl">"</div>
            {details.text}
            <div className="font-bold text-xl">"</div>
          </p>
        </div>

        <div className="flex justify-between w-full px-8 pb-8">
          <button onClick={leftShiftHandler} className="px-6 py-2 rounded-md bg-blue-800 text-white font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">Left</button>
          <button onClick={rightShiftHandler} className="px-6 py-2 rounded-md bg-purple-800 text-white font-semibold hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50">Right</button>
        </div>

      </div>

    </div>
  );
}
export default Card;