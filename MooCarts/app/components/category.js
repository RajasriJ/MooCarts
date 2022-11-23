import Component from '@glimmer/component';
import { service } from '@ember/service';

export default class CategoryComponent extends Component {
  @service('login-credientials') user;

  CategoryDetails = [
    { img: 'assets/images/homeapp.jpg', name: 'Home Appliances' },
    { img: 'assets/images/dress.png', name: 'Daily Wears' },
    { img: 'assets/images/grocery.jpg', name: 'Grocery' },
  ];
}
