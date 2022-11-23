import Component from '@glimmer/component';
import { service } from '@ember/service';
import { action } from '@ember/object';

export default class ItemsComponent extends Component {
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

  // @action
  // enlarge() {
  //   this.roter.transitionTo('products.home-apliences.item');
  // }
}
