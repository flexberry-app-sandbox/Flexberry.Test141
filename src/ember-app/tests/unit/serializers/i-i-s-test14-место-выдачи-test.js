import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-test14-место-выдачи', 'Unit | Serializer | i-i-s-test14-место-выдачи', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-test14-место-выдачи',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-test14-статусы',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
