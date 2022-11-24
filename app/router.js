import EmberRouter from '@ember/routing/router';
import config from 'sample-application/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('products', function () {
    this.route('home-apliences', { path: '/home-apliances' }, function () {
      this.route('item', { path: '/:item_id' });
    });
    this.route('daily-wears', function () {
      this.route('item', { path: '/:item_id' });
    });
    this.route('grocery', function () {
      this.route('item', { path: '/:item_id' });
    });
  });
  this.route('about');
  this.route('contact');
  this.route('cart-details');
  this.route('signin');
  this.route('signup');
  this.route('user-profile');
  this.route('success');
  this.route('card-form');
});
