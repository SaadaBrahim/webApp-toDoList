// app/models/todoModel.js
let todos = [];
const Todo = {
  findAll: () => todos,
  create: (title, description) => {
    const newTodo = { id: Date.now(), title, description };
    todos.push(newTodo);
    return newTodo;
  },
  findById: (id) => todos.find(t => t.id === parseInt(id)),
  delete: (id) => {
    todos = todos.filter(t => t.id !== parseInt(id));
  },
  update: (id, title, description) => {
    const todo = todos.find(t => t.id === parseInt(id));
    if (todo) {
      todo.title = title;
      todo.description = description;
    }
    return todo;
},  
};
module.exports = Todo;