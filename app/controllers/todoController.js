// app/controllers/todoController.js

const Todo = require('../models/todoModel');

exports.getTodos = (req, res) => {
  const todos = Todo.findAll();
  res.render('todos', { todos });
};

exports.createTodo = (req, res) => {
  const { title, description } = req.body;

  Todo.create(title, description);

  res.redirect('/todos');
};

exports.deleteTodo = (req, res) => {
  Todo.delete(req.params.id);

  res.json({ message: 'Todo deleted' });
};

exports.updateTodo = (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;

  const updatedTodo = Todo.update(id, title, description);
  if (!updatedTodo) {
    return res.status(404).json({ error: 'Todo not found' });
  }

  res.json({ message: 'Todo updated', todo: updatedTodo });
};