'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    await this.ctx.verify('login.login', 'query');
    this.ctx.body = 'hi, ' + this.app.plugins.validator.name;
  }
  async a() {
    await this.ctx.verify('heihei', this.ctx.query);
    this.ctx.body = 'hi, ' + this.app.plugins.validator.name;
  }
  async b() {
    await this.ctx.verify({
      name: {
        required: true,
      },
    }, async () => {
      return this.ctx.query;
    });
    this.ctx.body = 'hi, ' + this.app.plugins.validator.name;
  }
  async d() {
    await this.ctx.verify('haha', async () => {
      return this.ctx.query;
    });
    this.ctx.body = 'hi, ' + this.app.plugins.validator.name;
  }
  async f() {
    await this.ctx.verify('haha.aa', async () => {
      return this.ctx.query;
    });
    this.ctx.body = 'hi, ' + this.app.plugins.validator.name;
  }
}

module.exports = HomeController;
