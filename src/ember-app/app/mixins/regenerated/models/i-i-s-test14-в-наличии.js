import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date'),
  количество: DS.attr('number')
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-test14-в-наличии.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  количество: {
    descriptionKey: 'models.i-i-s-test14-в-наличии.validations.количество.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ВНаличииE', 'i-i-s-test14-в-наличии', {
    количество: attr('Количество', { index: 0 }),
    дата: attr('Дата', { index: 1 })
  });

  modelClass.defineProjection('ВНаличииL', 'i-i-s-test14-в-наличии', {
    количество: attr('Количество', { index: 0 }),
    дата: attr('Дата', { index: 1 })
  });
};
