import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-test14-место-выдачи', 'Unit | Model | i-i-s-test14-место-выдачи', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-test14-в-наличии',
    'model:i-i-s-test14-заказы',
    'model:i-i-s-test14-контрагент',
    'model:i-i-s-test14-место-выдачи',
    'model:i-i-s-test14-оповещения',
    'model:i-i-s-test14-продавец',
    'model:i-i-s-test14-состав-заказа',
    'model:i-i-s-test14-товары',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
