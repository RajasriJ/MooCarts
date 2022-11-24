import Route from '@ember/routing/route';

export default class ProductsHomeApliencesItemRoute extends Route {
  model(params) {
    if (params.item_id == 'mobile') {
      return [
        { name: 'Mobile', Rs: '30000', img: '/assets/images/mobile.jpg' },
      ];
    } else if (params.item_id == 'airpods') {
      return [
        { name: 'Airpods', Rs: '2000', img: '/assets/images/airpods.jpeg' },
      ];
    } else if (params.item_id == 'laptop') {
      return [{ name: 'Laptop', Rs: 50000, img: '/assets/images/lap.jpg' }];
    } else if (params.item_id == 'fridge') {
      return [
        {
          name: 'Refridgerator',
          Rs: '14000',
          img: '/assets/images/fridge.jpeg',
        },
      ];
    } else if (params.item_id == 'speaker') {
      return [
        { name: 'Speaker', Rs: '2000', img: '/assets/images/speaker.jpg' },
      ];
    } else {
      return [
        { name: 'PowerBank', Rs: '1500', img: '/assets/images/powerbank.jpg' },
      ];
    }
  }
}
