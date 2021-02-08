// Creating our Question model
module.exports = function (sequelize, DataTypes) {
  var Option = sequelize.define("Option", {
    // username cannot be null, and must be a proper email before creation
    text: {
      type: DataTypes.STRING,
      allowNull: false
    },
    resolution: {
      type: DataTypes.STRING(1024),
      allowNull: false
    },
    failure: {
      type: DataTypes.STRING(1024),
      defaultValue: null
    },
    str_req: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defautValue: 0
    },
    dex_req: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defautValue: 0
    },
    int_req: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defautValue: 0
    },
    str_gain: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defautValue: 0
    },
    dex_gain: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defautValue: 0
    },
    int_gain: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defautValue: 0
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
  Option.associate = function (models) {
    Option.belongsTo(models.Location, {
    });
  };


  // each location has several options
  Option.associate = function (models) {
    Option.belongsTo(models.Location, {
    });
  };

  return Option;

};