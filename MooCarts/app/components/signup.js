import Component from '@glimmer/component';
import { service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class SignupComponent extends Component {
  @service('login-credientials') user;

  @tracked name = '';
  @tracked password = '';
  @tracked email = '';
  @tracked repassword = '';
  @tracked route = 'index';

  @action
  add() {
    console.log('lalala');
    let item = { name: this.name, password: this.password, email: this.email };
    this.user.add(item);
  }

  @action
  validate() {}
}
