import Controller from '@ember/controller';
import { service } from '@ember/service';
import { action } from '@ember/object';

export default class ProductsHomeApliencesController extends Controller {
  @service('login-credientials') user;
  @service router;

  queryParams = ['sort'];
}
