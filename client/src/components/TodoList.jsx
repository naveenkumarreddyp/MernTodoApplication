import React, { useState, useEffect } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import { toast } from "react-toastify";
import axios from "axios";
import { URL } from "../App";
import loadingImg from "../assets/loader.gif";
import { FaTasks } from "react-icons/fa";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [todoId, setTodoId] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    completed: false,
  });
  const { name } = formData; // for update Todo

  const handleInputChange = (event) => {
    // console.log("event.target  ", event.target);
    const { name, value } = event.target;
    // console.log(name, value);
    setFormData({ ...formData, [name]: value });
  };

  const getTodos = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`${URL}/api/getTodos`);
      //   console.log(response);
      const data = response.data;
      setTodos(data);
      setIsLoading(false);
    } catch (err) {
      toast.error(err.message);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  const createTodo = async (e) => {
    e.preventDefault();
    // console.log(formData);
    if (name === "") {
      return toast.error("Input Field Cannot Be Empty");
    }
    try {
      await axios.post(`${URL}/api/addTodo`, formData);
      setFormData({ ...formData, name: "" });
      getTodos();
      toast.success("Todo Added Successfully");
    } catch (err) {
      toast.error(err.message);
    }
  };

  const deleteTodo = async (id) => {
    try {
      await axios.delete(`${URL}/api/deleteTodoById/${id}`);
      getTodos();
      toast.success("Todo Deleted Successfully");
    } catch (err) {
      toast.error(err.message);
    }
  };
  const getSingleTodo = async (todo) => {
    setFormData({ name: todo.name, completed: false });
    setIsEditing(true);
    setTodoId(todo._id);
  };
  const updateTodo = async (e) => {
    e.preventDefault();
    if (name === "") {
      return toast.error("Input Field Cannot Be Empty");
    }
    try {
      await axios.put(`${URL}/api/updateTodoById/${todoId}`, formData);
      setFormData({ ...formData, name: "" });
      setIsEditing(false);
      setTodoId("");
      getTodos();
      toast.success("Todo Updated Successfully");
    } catch (err) {
      toast.error(err.message);
    }
  };
  const setToComplete = async (todo) => {
    let newFormData = {
      name: todo.name,
      completed: true,
    };
    if (todo.completed === false) {
      newFormData["completed"] = true;
    } else {
      newFormData["completed"] = false;
    }
    try {
      await axios.put(`${URL}/api/updateTodoById/${todo._id}`, newFormData);
      getTodos();
      if (todo.completed === false) {
        toast.success("Todo Completed Successfully");
      } else {
        toast.success("Todo Not Completed");
      }
    } catch (err) {
      toast.error(err.message);
    }
  };
  useEffect(() => {
    const CmptdTodos = todos.filter((todo) => {
      return todo.completed === true;
    });
    setCompletedTodos(CmptdTodos);
  }, [todos]);
  return (
    <div>
      <h2>Todo App</h2>
      <TodoForm
        name={name}
        handleInputChange={handleInputChange}
        createTodo={createTodo}
        isEditing={isEditing}
        updateTodo={updateTodo}
      />
      {todos.length > 0 && (
        <div className="--flex-between --pb">
          <p>
            <b>Total Todos: </b>
            {todos.length}
          </p>
          <p>
            <b>Completed Todos: </b>
            {completedTodos.length}
          </p>
        </div>
      )}
      <hr />
      {isLoading && (
        <div className="--flex-center">
          <img src={loadingImg} alt="Loading" />
        </div>
      )}
      ,
      {!isLoading && todos.length === 0 ? (
        <p className="--py">No Todos Added. Please Add Todo</p>
      ) : (
        <>
          {todos.map((todo, idx) => {
            return (
              <Todo
                key={todo._id}
                todo={todo}
                idx={idx}
                deleteTodo={deleteTodo}
                getSingleTodo={getSingleTodo}
                setToComplete={setToComplete}
              />
            );
          })}
        </>
      )}
    </div>
  );
};

export default TodoList;
