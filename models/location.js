// Creating our Location model
module.exports = function (sequelize, DataTypes) {
    var Location = sequelize.define("Location", {
        //name of location
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // a short description of the location
        description: {
            type: DataTypes.STRING
        }
    });

    // each location can contain many characters
    Location.associate = function (models) {
        Location.hasMany(models.Character, {
            foreignKey: {
            }
        });
    };

    return Location;
};