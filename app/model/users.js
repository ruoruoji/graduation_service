'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const Users = app.model.define('users', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    account: { type: STRING(10), allowNull: false, unique: true },
    password: { type: STRING(30), allowNull: false },
    created_at: DATE,
    updated_at: DATE,
  });

  Users.findByAccount = async account => {
    return await Users.findOne({
      where: {
        account,
      },
    });
  };

  return Users;
};
