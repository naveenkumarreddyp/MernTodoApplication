const Todo = require('../model/TodoModel');
const {
    createTodoService,
    getTodosService,
    getTodoByIdService,
    deleteTodoByIdService,
    updateTodoByIdService
} = require('../services/todoService')

// create todo
const createTodo = async (req, res) => {
    try {
        const todo = await createTodoService(req.body)
        res.status(200).json(todo)
    }
    catch (error) {
        res.status(500).json({ msg: error.message })
    }
}
// Get Todos
const getTodos = async (req, res) => {
    try {
        const todos = await getTodosService()
        res.status(200).json(todos)
    }
    catch (error) {
        res.status(500).json({ msg: error.message })
    }
}
// get single todo
const getTodoById = async (req, res) => {
    try {
        const oneTodo = await getTodoByIdService(req.params.id);
        res.status(200).json(oneTodo)
    }
    catch (error) {
        res.status(500).json({ msg: error.message })
    }
}
const deleteTodoById = async (req, res) => {
    try {
        const deleteTodo = await deleteTodoByIdService(req.params.id);
        res.status(200).json(deleteTodo)
    }
    catch (error) {
        res.status(500).json({ msg: error.message })
    }
}
const updateTodoById = async (req, res) => {
    try {
        const updateTodo = await updateTodoByIdService(req.params.id);
        res.status(200).json(pdateTodo)
    }
    catch (error) {
        res.status(500).json({ msg: error.message })
    }
}
module.exports = {
    createTodo,
    getTodos,
    getTodoById,
    deleteTodoById,
    updateTodoById
}