'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // User has many Followed_Artist
    return queryInterface.addColumn(
      'Followed_Artists',
      'user_id',
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id'
        },
        allowNull: false,
        foreignKey: true,
        onDelete: 'cascade'
      }
    )
    .then(()=> {
      // User has many Favorite_Track
      return queryInterface.addColumn(
        'Favorite_Tracks',
        'user_id',
        {
          type: Sequelize.INTEGER,
          references: {
            model: 'Users',
            key: 'id'
          },
          allowNull: false,
          foreignKey: true,
          onDelete: 'cascade'
        })
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'Followed_Artists', 
      'user_id'
    )
    .then(() => {
      return queryInterface.removeColumn(
        'Favorite_Tracks', 
        'user_id'
      )
    })
  }
};
