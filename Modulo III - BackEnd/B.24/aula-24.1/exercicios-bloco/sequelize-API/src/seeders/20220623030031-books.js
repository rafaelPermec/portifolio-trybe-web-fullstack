'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Books', [
      {
        title: 'Neuromancer',
        author: 'Willian Gibson',
        pageQuantity: 319,
        available: false,
      },
      {
        title: 'Do Androids Dream of Electric Sheep?',
        author: 'Philip K. Dick',
        pageQuantity: 283,
        available: true,
      },
      {
        title: 'Clockwork Orange',
        author: 'Anthony Burgees',
        pageQuantity: 292,
        available: true,
      },
      {
        title: 'I, Robot',
        author: 'Isaac Azimov',
        pageQuantity: 315,
        available: false,
      },
    ], {});

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Books', null, {});
  }
};
