import React from "react";

const TodoForm = ({
  createTodo,
  name,
  handleInputChange,
  isEditing,
  updateTodo,
}) => {
  return (
    <form className="todo-form" onSubmit={isEditing ? updateTodo : createTodo}>
      <input
        type="text"
        placeholder="Add a Task"
        name="name"
        value={name}
        onChange={handleInputChange}
      />
      <button type="submit">{isEditing ? "Edit" : "Add"}</button>
    </form>
  );
};

export default TodoForm;
