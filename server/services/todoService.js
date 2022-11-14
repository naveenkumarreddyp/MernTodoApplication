const Todo = require("../model/TodoModel");

const createTodoService = async (data) => {
    const todo = await Todo.create(data);
    return todo;
};
const getTodosService = async () => {
    const todos = await Todo.find({});
    return todos;
};
const getTodoByIdService = async (id) => {
    // try {
    const oneTodo = await Todo.findOne({ "_id": id });
    // console.log(oneTodo)
    if (!oneTodo) {
        return `No Todo with id: ${id}`;
    }
    return oneTodo;
    // }
    // catch (error) {
    //     return error.message;
    // }
};
const deleteTodoByIdService = async (id) => {
    // try {
    const deletetodo = await Todo.findByIdAndDelete({ "_id": id });
    // console.log(deletetodo)
    if (!deletetodo) {
        return `No Todo with id: ${id}`;
    }
    return deletetodo;
    // } catch (error) {
    //     return error.message;
    // }
};
const updateTodoByIdService = async () => {

}
module.exports = {
    createTodoService,
    getTodosService,
    getTodoByIdService,
    deleteTodoByIdService,
    updateTodoByIdService
};
