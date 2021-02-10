// Creating our Location model (basically is an encounter)
module.exports = function (sequelize, DataTypes) {
    var Inventory = sequelize.define("Inventory", {
        
    });

    Inventory.associate = (models) => {

        models.Item.hasMany(models.Inventory, {
            as: "Inventorys", foreignKey: "ItemId"
        });

        models.Inventory.belongsTo(models.Item, {
            foreignKey: "ItemId"
        });

        models.Character.hasMany(models.Inventory, {
            as: "Inventorys", foreignKey: "CharacterId"
        });

        models.Inventory.belongsTo(models.Character, {
            foreignKey: "CharacterId"
        });
    }

    return Inventory;
};