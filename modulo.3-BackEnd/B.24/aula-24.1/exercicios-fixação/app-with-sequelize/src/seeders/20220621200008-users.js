'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Users',
    [
      {
        fullName: 'Rafael',
        email: 'dev.rafaelpermec@gmail.com',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        phone_num: '+5531987748874',
      },
      {
        fullName: 'Perdigão',
        email: 'geekchef.dev@gmail.com',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        phone_num: '+5531987748874',
      }
    ], {}),

  down: async (queryInterface, Sequelize) => queryInterface.bulkDelete('Users', null, {}),

};
