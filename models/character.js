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
        //player character or not
        type: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        // a short description of the character
        description: {
            type: DataTypes.STRING
        }
    });

    // makes it so each character belongs to a user
    Character.associate = function (models) {
        Character.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    // makes it so each every character has one Inventory
    Character.associate = function (models) {
        Inventory.hasOne(models.Location, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Character;
};