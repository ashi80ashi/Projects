import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, removeTodo } from "../todoSlice";

function TodoList() {

  const data = useSelector((state) => state.todo.initialdata);
  const dispatch = useDispatch();

  const [newdata, setnewdata] = useState("");
  
  const updatedata = (e) => {
    setnewdata(e.target.value);
  };

  return (
    <div className="w-4/6  h-5/6 bg-blue-100 overflow-scroll ">
      <div className=" w-5/6 m-auto mt-5 flex flex-row justify-evenly">
        <input
          className="w-3/6 border-2 border-solid border-indigo-600 focus:outline-none"
          type="text"
          onChange={updatedata}
          placeholder="note down"
        ></input>
        <button
          className="bg-green-700 w-10 text-white rounded-lg"
          onClick={() => dispatch(addTodo(newdata))}
        >
          +
        </button>
      </div>

      <div className=" w-5/6 m-auto mt-4 flex flex-col gap-3">
        {data.map((e) => (
          <div className="bg-white rounded-lg h-12 flex flex-row justify-center items-center  ">
            <h1 key={e.id} className=" w-5/6 m-auto ">
              {e.txt}
            </h1>
            <button
              className="bg-red-600 mr-4 text-white w-8 rounded-lg"
              onClick={() => dispatch(removeTodo(e.id))}
            >
              -
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TodoList;
