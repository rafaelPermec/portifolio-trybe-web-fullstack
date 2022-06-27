'use strict';

module.exports = {
  async up(queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('Books', [
      {
        title: 'Neuromancer',
        author: 'Willian Gibson',
        pageQuantity: 319,
        available: false,
        publisher: 'Aleph',
      },
      {
        title: 'Do Androids Dream of Electric Sheep?',
        author: 'Philip K. Dick',
        pageQuantity: 283,
        available: true,
        publisher: 'Aleph',
      },
      {
        title: 'Clockwork Orange',
        author: 'Anthony Burgees',
        pageQuantity: 292,
        available: true,
        publisher: 'Aleph',
      },
      {
        title: 'I, Robot',
        author: 'Isaac Azimov',
        pageQuantity: 315,
        available: false,
        publisher: 'Aleph',
      },
    ], {});

  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('Books', null, {});
  }
};
