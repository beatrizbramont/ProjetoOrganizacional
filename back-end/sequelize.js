const express = require('express');
const produtoRoutes = require('./routes/produtoRoutes');
const sequelize = require('./sequelize');

const app = express();
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

// Testar conexão e sincronizar modelos
sequelize.sync().then(() => {
  console.log('Banco de dados sincronizado');
}).catch(err => {
  console.error('Erro ao conectar ao banco:', err);
});

app.use('/', produtoRoutes);

app.listen(8000, () => console.log('Servidor rodando na porta 8000'));
