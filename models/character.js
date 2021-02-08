// Creating our Character model
module.exports = function (sequelize, DataTypes) {
    var Character = sequelize.define("Character", {
        //character's intelligence stat (not including items?)
        intelligence: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        //character's strength stat (not including items?)
        strength: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        //character's dexterity stat (not including items?)
        dexterity: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        // a short description of the character
        description: {
            type: DataTypes.STRING
        },
        death_message: {
            type: DataTypes.STRING,
            defaultValue : null
        }
    });

    Character.associate = function (models) {
        Character.belongsTo(models.Location, {
            foreignKey: {
                defaultValue: null
            }
        });
    };

    return Character;
};