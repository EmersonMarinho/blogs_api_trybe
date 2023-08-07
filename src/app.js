const express = require('express');
const LoginRouter = require('./routes/login.routes');
const UserRouter = require('./routes/user.routes');
const CategoryRouter = require('./routes/category.routes');
const PostRouter = require('./routes/post.routes');

// ...

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

app.use('/login', LoginRouter);
app.use(UserRouter);
app.use(CategoryRouter);
app.use(PostRouter);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
