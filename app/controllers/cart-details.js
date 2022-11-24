import Controller from '@ember/controller';
import { service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class CartDetailsController extends Controller {
  @service('login-credientials') user;
  @tracked isClick = false;

  @action
  remove(item) {
    this.user.removeItem(item);
    this.isClick = true;
  }
}
