const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const todoRoutes = require('./routes/todoRoutes');

app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.use('/', todoRoutes);

app.listen(3000, () => {
  console.log('App in esecuzione su http://localhost:3000');
});