// Creating our Inventory model
module.exports = function (sequelize, DataTypes) {
    var Inventory = sequelize.define("Inventory", {

    });

    // makes it so each inventory must belong to a specific character and links to their id
    Inventory.associate = function (models) {
        Inventory.belongsTo(models.Character, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    // each inventory has many items, each item is in many inventories
    // belongsToMany defines a many to many association
    Inventory.associate = function (models) {
        Inventory.belongsToMany(models.Item, {
            through: "item_to_inventory"
        });
    };

    return Inventory;
};
