import Component from '@glimmer/component';
import { service } from '@ember/service';
import { action } from '@ember/object';

export default class ItemsComponent extends Component {
  @service('login-credientials') user;
  @service router;

  a = this.args.itemDetails;

  constructor() {
    super(...arguments);
    let array = this.args.itemDetails;
    array.forEach((element) => {
      console.log(element);
    });

    for (var i = 0; i < array.length; i++) {
      for (var j = i + 1; j < array.length; j++) {
        let first = parseInt(array[i].Rs);
        let sec = parseInt(array[j].Rs);
        if (first > sec) {
          let temp = array[i];
          array[i] = array[j];
          array[j] = temp;
        }
      }
    }
    array.forEach((element) => {
      console.log(element);
    });
  }

  @action
  validate(item) {
    if (this.user.isUser) {
      console.log(item);

      this.user.addItem(item);
      this.router.transitionTo('cart-details');
    } else {
      console.log(this.a);
      this.router.transitionTo('signin');
    }
  }
}
