const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.defined('user',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING,},
    role: {type: DataTypes.STRING,}
})