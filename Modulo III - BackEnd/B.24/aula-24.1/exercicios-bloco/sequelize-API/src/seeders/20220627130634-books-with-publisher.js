'use strict';

module.exports = {
  async up(queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('Books', 'publisher', {
      publisher: 'Aleph',
    }
      , {});

  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('Books', null, {});
  }
};
