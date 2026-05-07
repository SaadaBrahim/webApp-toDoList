// routes/todoRoutes.js
const express = require('express');
const router = express.Router();
const todoController = require('../app/controllers/todoController');
// Rotte
router.get('/', todoController.getTodos);
router.post('/todos', todoController.createTodo);
router.delete('/todos/:id', todoController.deleteTodo);
router.put('/todos/:id', todoController.updateTodo);
module.exports = router;