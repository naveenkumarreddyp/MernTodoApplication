const express = require('express');
const { createTodo,
    getTodos,
    getTodoById,
    deleteTodoById,
    updateTodoById } = require('../controllers/todoController');
const Todo = require('../model/TodoModel');

const router = express.Router();

// Create Todo
router.post('/api/todo', createTodo);
router.get('/api/todos', getTodos);
router.get('/api/getTodoById/:id', getTodoById);
router.delete('/api/deleteTodoById/:id', deleteTodoById);
router.put("/api/updateTodoById/:id", updateTodoById)

module.exports = router