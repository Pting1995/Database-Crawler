// Creating our defeated model
module.exports = function (sequelize, DataTypes) {
    var Creature = sequelize.define("Creature", {
        //creature's intelligence stat (not including items?)
        intelligence: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        //creature's strength stat (not including items?)
        strength: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        //creature's dexterity stat (not including items?)
        dexterity: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        // a short description of the creature
        description: {
            type: DataTypes.STRING
        },
        // number of global players killed by this creature
        killCount: {
            type: DataTypes.STRING,
            defaultValue: 0
        },
        // number of this creature killed globally by players
        deathCount: {
            type: DataTypes.STRING,
            defaultValue: 0
        }
    });

    return Creature;
};