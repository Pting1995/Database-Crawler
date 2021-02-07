// Creating our Character model
module.exports = function (sequelize, DataTypes) {
    var Character = sequelize.define("Character", {
        //character's intelligence stat (not including items?)
        intelligence: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        //character's strength stat (not including items?)
        strength: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        //character's dexterity stat (not including items?)
        dexterity: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        // a short description of the character
        description: {
            type: DataTypes.STRING
        }
    });

    // each character has one creature that killed them, it starts out as null and updates when the character dies
    Character.associate = function (models) {
<<<<<<< HEAD
        Character.belongsTo(models.Location, {
=======
        Character.belongsTo(models.Creature, {
>>>>>>> main
            foreignKey: {
                defaultValue: 1
            }
        });
    };

<<<<<<< HEAD
=======
    Character.associate = function (models) {
        Character.belongsTo(models.Location, {
            foreignKey: {
                defaultValue: 1
            }
        });
    };

    // makes it so each every character has one inventory
>>>>>>> main
    Character.associate = function (models) {
        Character.belongsTo(models.Creature, {
            foreignKey: {
                defaultValue: null
            }
        });
    };

    return Character;
};