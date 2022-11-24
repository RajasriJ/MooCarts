import Route from '@ember/routing/route';

export default class ProductsGroceryItemRoute extends Route {
  model(params) {
    if (params.item_id == 'Tomato') {
      return [{ name: 'Tomato Rs.30,000', img: '/assets/images/gro1.jpeg' }];
    } else if (params.item_id == 'Eggplant') {
      return [{ name: 'Eggplant Rs.200', img: '/assets/images/gro2.jpeg' }];
    } else if (params.item_id == 'Carrot') {
      return [{ name: 'Carrot Rs.50', img: '/assets/images/gro3.jpeg' }];
    } else if (params.item_id == 'Oil') {
      return [{ name: 'Oli Rs.2000', img: '/assets/images/gro4.jpg' }];
    } else if (params.item_id == 'Powder') {
      return [{ name: 'Powder Rs.140', img: '/assets/images/gro5.jpg' }];
    } else {
      return [{ name: 'Coffee Powder Rs.150', img: '/assets/images/gro6.jpg' }];
    }
  }
}
