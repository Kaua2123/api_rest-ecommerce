module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('chart', { id: Sequelize.INTEGER });
  },

  // async down (queryInterface, Sequelize) {}
};
