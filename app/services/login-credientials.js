import Service from '@ember/service';
import { A } from '@ember/array';
import { tracked } from '@glimmer/tracking';

export default class LoginCredientialsService extends Service {
  // items = A([]);
  LoginCredientials = [{ name: 'RajasriJ', password: 'raji' }];
  @tracked isUser = false;
  @tracked ItemDetails = [];

  add(item) {
    console.log(item);
    this.LoginCredientials.push(item);
    this.isUser = true;
    console.log(this.LoginCredientials);
  }

  addItem(item) {
    this.ItemDetails.pushObject(item);
  }

  removeItem(item) {
    this.ItemDetails.pop(item);
    console.log(item);
  }

  check(item) {
    for (const i of this.LoginCredientials) {
      if (i.name == item.name && i.password == item.password) {
        this.isUser = true;
        console.log('hello world');
        break;
      }
    }
  }

  remove() {
    // this.LoginCredientials=pop(item);
    this.isUser = false;
    console.log(this.items);
  }
}
