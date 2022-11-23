import Service from '@ember/service';
import { A } from '@ember/array';
import { tracked } from '@glimmer/tracking';

export default class LoginCredientialsService extends Service {
  // items = A([]);
  LoginCredientials= [{name:"RajasriJ",password:"raji"}];
  @tracked isUser = false;

  add(item) {
    console.log(item);
    this.LoginCredientials.push(item);
    this.isUser = true;
    console.log(this.LoginCredientials);
  }

  check(item) {
    // console.log(item.password)
    for (const i of this.LoginCredientials) {
      // console.log(i.password)
      if ((i.name == item.name) && (i.password == item.password) ){
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
