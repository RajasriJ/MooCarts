import { module, test } from 'qunit';
import { setupTest } from 'sample-application/tests/helpers';

module('Unit | Controller | home-appliances', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:home-appliances');
    assert.ok(controller);
  });
});
