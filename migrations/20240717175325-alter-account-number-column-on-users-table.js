'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.changeColumn(
      'users',
      'account_number',
      {
        type: 'BIGINT USING CAST("account_number" as BIGINT)'
      }
    )
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.changeColumn(
      'users',
      'account_number',
      {
        type: Sequelize.DataTypes.STRING
      }
    )
  }
};
