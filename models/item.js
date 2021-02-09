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
        },
        createdAt: {
            type: DataTypes.STRING,
            default: null
        },
        updatedAt: {
            type: DataTypes.STRING,
            default: null
        }
    });

    // each item can belong to many creatures (each creature drops one item)
    Item.associate = function (models) {
        Item.hasMany(models.Location, {
        });
    };

    return Item;
};