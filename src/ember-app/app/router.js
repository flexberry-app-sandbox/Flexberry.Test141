import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-test14-в-наличии-l');
  this.route('i-i-s-test14-в-наличии-e',
  { path: 'i-i-s-test14-в-наличии-e/:id' });
  this.route('i-i-s-test14-в-наличии-e.new',
  { path: 'i-i-s-test14-в-наличии-e/new' });
  this.route('i-i-s-test14-заказы-l');
  this.route('i-i-s-test14-заказы-e',
  { path: 'i-i-s-test14-заказы-e/:id' });
  this.route('i-i-s-test14-заказы-e.new',
  { path: 'i-i-s-test14-заказы-e/new' });
  this.route('i-i-s-test14-контрагент-l');
  this.route('i-i-s-test14-контрагент-e',
  { path: 'i-i-s-test14-контрагент-e/:id' });
  this.route('i-i-s-test14-контрагент-e.new',
  { path: 'i-i-s-test14-контрагент-e/new' });
  this.route('i-i-s-test14-место-выдачи-l');
  this.route('i-i-s-test14-место-выдачи-e',
  { path: 'i-i-s-test14-место-выдачи-e/:id' });
  this.route('i-i-s-test14-место-выдачи-e.new',
  { path: 'i-i-s-test14-место-выдачи-e/new' });
  this.route('i-i-s-test14-оповещения-l');
  this.route('i-i-s-test14-оповещения-e',
  { path: 'i-i-s-test14-оповещения-e/:id' });
  this.route('i-i-s-test14-оповещения-e.new',
  { path: 'i-i-s-test14-оповещения-e/new' });
  this.route('i-i-s-test14-продавец-l');
  this.route('i-i-s-test14-продавец-e',
  { path: 'i-i-s-test14-продавец-e/:id' });
  this.route('i-i-s-test14-продавец-e.new',
  { path: 'i-i-s-test14-продавец-e/new' });
  this.route('i-i-s-test14-товары-l');
  this.route('i-i-s-test14-товары-e',
  { path: 'i-i-s-test14-товары-e/:id' });
  this.route('i-i-s-test14-товары-e.new',
  { path: 'i-i-s-test14-товары-e/new' });
});

export default Router;
