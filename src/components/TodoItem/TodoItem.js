import React from "react";
import "./TodoItem.css";

function Todo(props) {
  const { content, id } = props;

  const isDone = function (e){
    if (e.target.classList.contains("todos")){
      e.target.classList.toggle("isDone")
    }
  }

 

  return (
    <div className="todos" onClick={isDone}>
      {content}
      <button className="btn btn-danger delete-btn"
       onClick={() => props.deleteItemProp(id)} >Sil
       </button>
    </div>
    );
}

export default Todo;
