import Route from '@ember/routing/route';

export default class ProductsDailyWearsItemRoute extends Route {
  model(params) {
    if (params.item_id == 'Babydoll dress') {
      return [
        { name: 'Babydoll dress Rs.30,000', img: '/assets/images/dress1.jpeg' },
      ];
    } else if (params.item_id == 'Wrap around') {
      return [
        { name: 'Wrap around Rs.2000', img: '/assets/images/dress2.jpg' },
      ];
    } else if (params.item_id == 'Kimono') {
      return [{ name: 'Kimono Rs.50,000', img: '/assets/images/dress3.jpeg' }];
    } else if (params.item_id == 'Bubble dress') {
      return [
        { name: 'Bubble dress Rs.14,000', img: '/assets/images/dress4.jpeg' },
      ];
    } else if (params.item_id == 'Polo dress') {
      return [
        { img: '/assets/images/dress5.jpeg', name: 'Polo dress Rs.1500' },
      ];
    } else {
      return [{ name: 'Tutu Dress Rs.1500', img: '/assets/images/dress6.jpg' }];
    }
  }
}
