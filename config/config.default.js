/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {});

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_17356535320_867149076';

  // mysql
  config.sequelize = {
    dialect: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    database: 'graduation',
    username: 'root',
    password: '867149'
  };

  // add your middleware config here
  config.middleware = ['outputHandler'];

  // add your user config here
  const userConfig = {
    outputHandler: {
      match: '/api'
    }
  };

  return {
    ...config,
    ...userConfig
  };
};
