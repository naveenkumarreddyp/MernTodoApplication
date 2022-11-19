const express = require('express');
const { createTodo,
    getTodos,
    getTodoById,
    deleteTodoById,
    updateTodoById } = require('../controllers/todoController');
const Todo = require('../model/TodoModel');

const router = express.Router();

// Create Todo
router.post('/api/addTodo', createTodo);
router.get('/api/getTodos', getTodos);
router.get('/api/getTodoById/:id', getTodoById);
router.delete('/api/deleteTodoById/:id', deleteTodoById);
router.put("/api/updateTodoById/:id", updateTodoById)

module.exports = router


// Put => client needs to replace an existing Resource entirely, they can use PUT
// patch => When client doing a partial update, they can use HTTP PATCH