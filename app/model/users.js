'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const Users = app.model.define(
    'users',
    {
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
      department: { type: INTEGER, comment: '部门' },
      title: { type: STRING, comment: '职称' },
      address: { type: STRING, comment: '联系地址' },
      phone_num: { type: STRING, comment: '手机号码' },
      email: { type: STRING, comment: '电子邮件' },
      introduce: { type: STRING, comment: '个人简介' },
      avatar: { type: STRING, comment: '头像' },
      created_at: DATE,
      updated_at: DATE
    },
    {
      comment: '用户表'
    }
  );

  Users.findByAccount = async account => {
    return await Users.findOne({
      where: {
        account
      }
    });
  };

  return Users;
};
