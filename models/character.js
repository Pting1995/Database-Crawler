// Creating our Character model
module.exports = function (sequelize, DataTypes) {
    var Character = sequelize.define("Character", {
        // foreign key: id of user character belongs to
        user_id : {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        // foreign key: id of location character is at
        location_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
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
    return Character;

};