const {DataTypes} = require('sequelize');
const sequelize = require('../sequelize');
const User = require('../models/user'); // Importa o modelo user

const Lembrete = sequelize.define('Lembrete', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  titulo: {
    type: DataTypes.STRING,
    allowNull: false, // não pode ter valor nulo
  },
  descricao: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  data: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  hora: {
    type: DataTypes.TIME,
    allowNull: 'ativo',
  },
});

// faz as conexões do banco de dados
Lembrete.belongsTo(User, { foreignKey: 'userId' });
User.hasMany(Lembrete, { foreignKey: 'userId' });


module.exports = {
  Lembrete,
  sequelize,
};