import { helper } from '@ember/component/helper';

export default helper(function logicalop(args) {
  let [exp1, exp2, op] = args;
  if (op == 'and') {
    if (exp1 && exp2) {
      return true;
    } else {
      return false;
    }
  } else if (op == 'or') {
    if (exp1 || exp2) {
      return true;
    } else {
      return false;
    }
  }
});
