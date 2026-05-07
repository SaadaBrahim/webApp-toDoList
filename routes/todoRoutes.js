// routes/todoRoutes.js
const express = require('express');
const router = express.Router();
const todoController = require('../app/controllers/todoController');
// Rotte
router.get('/todos', todoController.getTodos);
router.post('/todos', todoController.createTodo);
router.delete('/todos/:id', todoController.deleteTodo);
router.put('/todos/:id', todoController.updateTodo);
router.get('/', (req, res) => res.redirect('/todos'));
module.exports = router;