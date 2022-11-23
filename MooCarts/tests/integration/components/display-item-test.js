import { module, test } from 'qunit';
import { setupRenderingTest } from 'sample-application/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | display-item', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<DisplayItem />`);

    assert.dom(this.element).hasText('');

    // Template block usage:
    await render(hbs`
      <DisplayItem>
        template block text
      </DisplayItem>
    `);

    assert.dom(this.element).hasText('template block text');
  });
});
