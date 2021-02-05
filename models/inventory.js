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

    // each inventory has many items
    Inventory.associate = function (models) {
        Inventory.hasMany(models.Item, {
        });
    };

    return Inventory;
};