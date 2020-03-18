'use strict';

module.exports = {
  // 在执行数据库升级时调用的函数，创建 projects 表
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING } = Sequelize;

    await queryInterface.createTable('projects', {
      id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true,
        comment: '主键'
      },
      account: {
        type: STRING,
        allowNull: false,
        unique: true,
        comment: '工号'
      },
      password: { type: STRING, allowNull: false, comment: '密码' },
      role: { type: STRING, comment: '角色' },
      name: { type: STRING, comment: '姓名' },
      age: { type: INTEGER, comment: '年龄' },
      department: { type: STRING, comment: '部门' },
      title: { type: STRING, comment: '职称' },
      address: { type: STRING, comment: '联系地址' },
      phone_num: { type: STRING, comment: '手机号码' },
      email: { type: STRING, comment: '电子邮件' },
      introduce: { type: STRING, comment: '个人简介' },
      avatar: { type: STRING, comment: '头像' },
      created_at: DATE,
      updated_at: DATE
    });
  },
  // 在执行数据库降级时调用的函数，删除 projects 表
  down: async queryInterface => {
    await queryInterface.dropTable('projects');
  }
};
