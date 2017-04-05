import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('search-facet-provider', 'Integration | Component | search facet provider', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

    this.set('facet', { key: 'sources', title: 'Providers', component: 'search-facet-provider' });
    this.set('key', 'sources');
    let noop = () => {};
    this.set('noop', noop);
    this.set('activeFilters', { providers: [], subjects: [] });
    this.set('filterReplace',  {'Open Science Framework': 'OSF'});

    this.render(hbs`{{search-facet-provider
        key=key
        options=facet
        updateFilters=(action noop)
        activeFilters=activeFilters
        filterReplace=filterReplace
    }}`);

  assert.equal(this.$().text().trim(), '');
});
