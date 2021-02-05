// Creating our Item model
module.exports = function (sequelize, DataTypes) {
    var Item = sequelize.define("Item", {
        //item name
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        //item's intelligence stat
        intelligence: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        //item's strength stat
        strength: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        //item's dexterity stat
        dexterity: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        // a short description of the item
        description: {
            type: DataTypes.STRING
        }
    });
    return Item;
};