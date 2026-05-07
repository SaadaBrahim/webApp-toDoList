// app.js
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
// Imposta il motore di template EJS
app.set('view engine', 'ejs');
app.set('views', './app/views');
// Middleware per dati POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
// Route principali
app.use('/', userRoutes);
// Avvia il server
app.listen(3000, () => {
  console.log('App in esecuzione su http://localhost:3000');
});