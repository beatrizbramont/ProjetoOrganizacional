const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('nome_do_banco', 'usuario', 'senha', {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306, // padrão do MySQL, ajuste se necessário
  logging: false, // opcional, para não mostrar logs SQL
});

module.exports = sequelize;
