'use strict';

module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert(
      'Users',
      [
        {
          id: 1,
          account: 'superAdmin',
          password: 'password',
          role: 'superAdmin',
          name: '孙权',
          age: '21',
          department: '计科院',
          title: '本科',
          address: '安徽大学',
          phone_num: 17356535320,
          email: '867149076@qq.com',
          introduce: '最近压力有点大',
          avatar: '',
          created_at: new Date(),
          updated_at: new Date()
        }
      ],
      {}
    );
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
