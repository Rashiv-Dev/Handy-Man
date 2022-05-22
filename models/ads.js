const { Model,DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Ads extends Model {}

Ads.init(
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
        user_id:{
            type: DataTypes.INTEGER,
            references: {
                model: 'User',
                key: 'id',
            },
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'ad'
    }
)

module.exports = Ads;