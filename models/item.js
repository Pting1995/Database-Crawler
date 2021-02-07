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

    // each item can belong to many creatures (each creature drops one item)
    Item.associate = function (models) {
        Item.hasMany(models.Creature, {
        });
    };

    // each inventory has many items, each item is in many inventories
    // belongsToMany defines a many to many association
    Item.associate = function (models) {
        Item.belongsToMany(models.Inventory, {
            through: "item_to_inventory"
        });
    };

    return Item;
};