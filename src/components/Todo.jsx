import { useEffect, useRef, useState } from "react";
import todo_icon from "../assets/todo_icon.png";
import Footar from './Footar'
import Todoitems from "./Todoitems";


const Todo = () => {
  const [todoList, setTodoList] = useState(
  localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : []
);

  const inputRef = useRef();

  const add = () => {
    const inputText = inputRef.current.value.trim();

    if (inputText === "") {
      alert("Please input your Task");
      return null;
    }

    const newTodo = {
      id: Date.now(),
      text: inputText,
      isComplate: false,
    };
    setTodoList((prev) => [...prev, newTodo]);
    inputRef.current.value = "";
  };



  const deleteTodo = (id) => {
    setTodoList((prevTodo) => prevTodo.filter((todo) => todo.id !== id));
  };

  const toggle = (id) => {
    setTodoList((prevTodo) => {
      return prevTodo.map((todo) => {
        if(todo.id === id) {
          return {...todo, isComplate: !todo. isComplate}
        }
        return todo;
      })
    })
  }


  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoList));
  },[todoList]) 



  return (
    <div className="bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl Main">
      {/* title */}

      <div className="flex items-center gap-2 ">
        <img src={todo_icon} alt="" className="w-8 ml-24" />
        <h1 className="text-3xl font-semibold">To-Do List</h1>
      </div>

      {/* input box feild  */}

      <div className="flex items-center my-7 bg-gray-200 rounded-full">
        <input
          ref={inputRef}
          className="bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600"
          type="text"
          placeholder="Add Your Task"
        />
        <button
          onClick={add}
          className="border-none rounded-full bg-orange-600 w-32 h-14 text-white text-lg font-medium cursor-pointer "
        >
          Add +
        </button>
      </div>

      {/* Display tha Todo list */}

      <div className="h-80 overflow-y-auto p-4 border border-gray-300 rounded scrollbar-thin scrollbar-thumb-orange-600 scrollbar-track-gray-100 scrollbar-thumb-rounded-full">
        {todoList.map((item, index) => {
          return (
            <Todoitems
              key={index}
              text={item.text}
              id={item.id}
              isComplate={item.isComplate}
              deleteTodo={deleteTodo}
              toggle={toggle}
            />
          );
        })}
      </div>

      {/* Footer */}
      <div>
        <Footar/>
       </div>



    </div>
  );
};

export default Todo;
