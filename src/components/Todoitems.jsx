import tick from "../assets/tick.png";
import not_tick from "../assets/not_tick.png";
import delete_icon from "../assets/delete.png";


const Todoitems = ({ text, id, isComplate, deleteTodo, toggle }) => {
  return (
    <div onClick={()=> {toggle(id)}} className="flex items-center my-3 gap-2">
      <div className="flex flex-1 items-center cursor-pointer">
        <img src={isComplate ? tick : not_tick} alt="" className="w-6" />
        <p className={`text-slate-700 ml-4 text-[17px] decoration-slate-500
         ${isComplate ? "line-through" : "" }` }>
         {text}</p>
      </div>

      <img
        onClick={() => {
          deleteTodo(id);
        }}
        src={delete_icon}
        alt=""
        className="w-4 cursor-pointer "
      />
    </div>
  );
};

export default Todoitems;
