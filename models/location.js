// Creating our Location model (basically is an encounter)
module.exports = function (sequelize, DataTypes) {
    var Location = sequelize.define("Location", {
        //name of encounter
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // a short description of the location/encounter
        description: {
            type: DataTypes.STRING
        }
    });

    // each location has several options
    Location.associate = function (models) {
<<<<<<< HEAD
        Location.hasMany(models.Character, {
            foreignKey: {
                defaultValue: 1
            }
        });
    };

=======
        Location.hasMany(models.Option, {
        });
    };

    // each location can contain many characters
    Location.associate = function (models) {
        Location.hasMany(models.Character, {
        });
    };

>>>>>>> main
    return Location;
};