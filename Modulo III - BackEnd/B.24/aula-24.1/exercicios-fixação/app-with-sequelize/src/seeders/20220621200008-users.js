'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Users',
    [
      {
        full_name: 'Rafael',
        email: 'dev.rafaelpermec@gmail.com',
        phone_num: '+5531987748874',
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        full_name: 'Perdigão',
        email: 'geekchef.dev@gmail.com',
        phone_num: '+5531987748874',
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
      }
    ], {}),

  down: async (queryInterface, Sequelize) => queryInterface.bulkDelete('Users', null, {}),

};
