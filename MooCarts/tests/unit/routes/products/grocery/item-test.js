import { module, test } from 'qunit';
import { setupTest } from 'sample-application/tests/helpers';

module('Unit | Route | products/grocery/item', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:products/grocery/item');
    assert.ok(route);
  });
});
