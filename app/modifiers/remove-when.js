import { modifier } from 'ember-modifier';

export default modifier((element, [isClick]) => {
  if (isClick) {
    element.parentElement.remove();
  } else {
    console.log('do nothing');
  }
});
