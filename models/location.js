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
            type: DataTypes.STRING(1024)
        },
        img: {
            type: DataTypes.STRING,
            default: "#"
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

    // each location has several options
    Location.associate = function (models) {
        Location.hasMany(models.Character, {
            foreignKey: {
                defaultValue: 1
            }
        });
    };

    // each character has one creature that killed them, it starts out as null and updates when the character dies
    Location.associate = function (models) {
        Location.belongsTo(models.Item, {
            foreignKey: {
                defaultValue: null
            }
        });
    };

    return Location;
};