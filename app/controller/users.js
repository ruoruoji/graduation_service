'use strict';

const Controller = require('egg').Controller;

const toInt = str => {
  if (typeof str === 'number') return str;
  if (!str) return str;
  return parseInt(str, 10) || 0;
};

class UsersController extends Controller {
  async index() {
    const ctx = this.ctx;
    const query = {
      limit: toInt(ctx.query.limit),
      offset: toInt(ctx.query.offset),
    };
    ctx.body = await ctx.model.Users.findAll(query);
  }

  async show() {
    const ctx = this.ctx;
    const account = ctx.params.id;
    ctx.body = await ctx.model.Users.findByAccount(account);
  }

  async create() {
    const ctx = this.ctx;
    const { account, password } = ctx.request.body;
    // account值唯一，否则操作数据库会报错
    try {
      const user = await ctx.model.Users.create({ account, password });
      ctx.status = 201;
      ctx.body = user;
    } catch (error) {
      ctx.status = 409;
      ctx.error = '工号已经存在';
    }
  }

  async update() {
    const ctx = this.ctx;
    const { account, password } = ctx.request.body;
    const user = await ctx.model.Users.findByAccount(account);

    if (!user) {
      ctx.status = 404;
      ctx.error = '请输入正确工号';
      return;
    }

    await user.update({ account, password });
    ctx.body = user;
  }

  async destroy() {
    const ctx = this.ctx;
    const account = ctx.params.id;
    const user = await ctx.model.Users.findByAccount(account);
    if (!user) {
      ctx.status = 404;
      ctx.error = '请输入正确工号';
      return;
    }

    await user.destroy();
    ctx.status = 200;
  }
}

module.exports = UsersController;
