const express = require('express');
const LoginRouter = require('./routes/login.routes');
const UserRouter = require('./routes/user.routes');

// ...

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

app.use('/login', LoginRouter);
app.use('/user', UserRouter);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
