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
    ctx.body = await ctx.model.Users.findByPk(toInt(ctx.params.id));
  }

  async create() {
    const ctx = this.ctx;
    const { account, password } = ctx.request.body;
    const User = await ctx.model.Users.create({ account, password });
    ctx.status = 201;
    ctx.body = User;
  }

  async update() {
    const ctx = this.ctx;
    const id = toInt(ctx.params.id);
    const User = await ctx.model.Users.findByPk(id);
    if (!User) {
      ctx.status = 404;
      return;
    }

    const { account, password } = ctx.request.body;
    await User.update({ account, password });
    ctx.body = User;
  }

  async destroy() {
    const ctx = this.ctx;
    const id = toInt(ctx.params.id);
    const User = await ctx.model.Users.findByPk(id);
    if (!User) {
      ctx.status = 404;
      return;
    }

    await User.destroy();
    ctx.status = 200;
  }
}

module.exports = UsersController;
