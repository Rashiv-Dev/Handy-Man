const { Model,DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comments extends Model{}

Comments.init(
    {
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement : true,
        },
        rating:{
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        text:{
            type: DataTypes.TEXT,
            allowNull: false,
        },
        email:{
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isemail: true,
            },
        },
        user_id:{
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'comment'
    })

module.exports = Comments ; 