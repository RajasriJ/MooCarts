import Controller from '@ember/controller';
import { service } from '@ember/service';

export default class ProductsHomeApliencesIndexController extends Controller {
  @service('login-credientials') user;
}
