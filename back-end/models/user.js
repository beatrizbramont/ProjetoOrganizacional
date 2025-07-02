const {DataTypes} = require('sequelize'); //importa os tipos de dados que posso usar para os campos
const sequelize = require('../sequelize'); //importa a instância do Sequelize que foi configurado em outro arq(onde definimos a conexão com o banco de dados)

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false, // não pode ter valor nulo
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  senha: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue: 'default',
  },
});

module.exports = {
  User,
  sequelize,
}