import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class SigninComponent extends Component {
 
  @service('login-credientials') user;

  @tracked name = '';
  @tracked password = '';
  @tracked route = 'signup';
  flag = false;

  @action
  check() {
    let item = { name: this.name, password: this.password };
    this.user.check(item);

    if (this.user.isUser) {
      this.route = 'index';
    }
  }
}
