const { Model,DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class ads extends Model {}

ads.init(
    {
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement : true,
        },
        company_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        service: {
            type: DataTypes.STRING,
            allowNull: false,   
        },
        adText: {
            type: DataTypes.TEXT,
            allowNull: false
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'company'
    }
)

module.exports = company;