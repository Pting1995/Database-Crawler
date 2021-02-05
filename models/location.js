// Creating our Location model
module.exports = function (sequelize, DataTypes) {
    var Location = sequelize.define("Location", {
        //name of location
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // a short description of the character
        description: {
            type: DataTypes.STRING
        }
    });
    return Location;
};