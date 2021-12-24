'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Favorite_Track extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User, {
        foreignKey: 'user_id',
        onDelete: 'cascade'
      });
    }
  };
  Favorite_Track.init({
    title: DataTypes.STRING,
    cover: DataTypes.STRING,
    artist: DataTypes.STRING,
    preview: DataTypes.STRING,
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Favorite_Track',
  });
  return Favorite_Track;
};