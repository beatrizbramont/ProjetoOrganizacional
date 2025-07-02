const express = require('express');
const session = require('express-session');
const lembreteRoutes = require('./routes/lembreteRoutes');

const app = express();

app.use(express.urlencoded({ extended: true }));

// Sessão (exemplo básico)
app.use(session({
  secret: 'sua_chave_secreta',
  resave: false,
  saveUninitialized: false
}));

// View engine
app.set('view engine', 'ejs');

// Rotas
app.use('/lembretes', lembreteRoutes);

// Exemplo: redirecionar / para /lembretes
app.get('/', (req, res) => {
  res.redirect('/lembretes');
});

// Exportar app se quiser separar server.js
module.exports = app;
