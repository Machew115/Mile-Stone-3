'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.bulkInsert('users', [{
      user_f_name: 'Matthew',
      user_l_name: 'Herrera',
      user_email: 'why.mherrera@gmail.com',
      user_password: '25T@life1990',
    }])

    const [users] = await queryInterface.sequelize.query(
      `SELECT user_id from users LIMIT 1;`
    );
   
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
