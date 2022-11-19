import React from "react";
import { FaEdit, FaCheckDouble, FaRegTrashAlt } from "react-icons/fa";

const Todo = ({ todo, idx, deleteTodo, getSingleTodo, setToComplete }) => {
  return (
    <div className={todo.completed ? "todo completed" : "todo"}>
      {todo.completed ? (
        <s>
          <b>{idx + 1}. </b>
          {todo.name}
        </s>
      ) : (
        <p>
          <b>{idx + 1}. </b>
          {todo.name}
        </p>
      )}
      <div className="todo-icons">
        <FaCheckDouble color="green" onClick={() => setToComplete(todo)} />
        <FaEdit color="purple" onClick={() => getSingleTodo(todo)} />
        <FaRegTrashAlt color="red" onClick={() => deleteTodo(todo._id)} />
      </div>
    </div>
  );
};

export default Todo;
