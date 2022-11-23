import { module, test } from 'qunit';
import { setupRenderingTest } from 'sample-application/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | about-ours', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<AboutOurs />`);

    assert.dom(this.element).hasText('');

    // Template block usage:
    await render(hbs`
      <AboutOurs>
        template block text
      </AboutOurs>
    `);

    assert.dom(this.element).hasText('template block text');
  });
});
