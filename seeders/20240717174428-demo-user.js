'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    return queryInterface.bulkInsert('users', [
      {
        name: 'John Doe',
        account_number: '1234567890'
      },
      {
        name: 'Jane Doe',
        account_number: '2345678901'
      },
      {
        name: 'Lyra Belacqua',
        account_number: '3456789012'
      },
      {
        name: 'Little Finger',
        account_number: '4567890123'
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('users', null, {});
  }
};
