'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const Users = app.model.define('users', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    account: STRING(10),
    password: STRING(30),
    created_at: DATE,
    updated_at: DATE,
  });

  return Users;
};
