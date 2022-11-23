import Controller from '@ember/controller';
import { service } from '@ember/service';
import { action } from '@ember/object';

export default class ProductsHomeApliencesController extends Controller {
  @service('login-credientials') user;
  @service router;

  @action
  validate() {
    console.log(this.user.isUser);
    if (this.user.isUser) {
      this.router.transitionTo('cart-details');
    } else {
      this.router.transitionTo('signin');
    }
  }
}
