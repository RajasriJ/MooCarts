import Component from '@glimmer/component';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class NavBarComponent extends Component {
  @service('login-credientials') user;

  @tracked isOk = this.user.isUser;

  Routes = [
    { route: 'index', text: 'Home' },
    { route: 'about', text: 'About' },
    { route: 'products', text: 'Products' },
    { route: 'cart-details', text: 'YourCart' },
    { route: 'signin', text: 'Signin' },
  ];
}
