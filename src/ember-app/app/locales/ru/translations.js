import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISTest14ВНаличииLForm from './forms/i-i-s-test14-в-наличии-l';
import IISTest14ЗаказыLForm from './forms/i-i-s-test14-заказы-l';
import IISTest14КонтрагентLForm from './forms/i-i-s-test14-контрагент-l';
import IISTest14МестоВыдачиLForm from './forms/i-i-s-test14-место-выдачи-l';
import IISTest14ОповещенияLForm from './forms/i-i-s-test14-оповещения-l';
import IISTest14ПродавецLForm from './forms/i-i-s-test14-продавец-l';
import IISTest14ТоварыLForm from './forms/i-i-s-test14-товары-l';
import IISTest14ВНаличииEForm from './forms/i-i-s-test14-в-наличии-e';
import IISTest14ЗаказыEForm from './forms/i-i-s-test14-заказы-e';
import IISTest14КонтрагентEForm from './forms/i-i-s-test14-контрагент-e';
import IISTest14МестоВыдачиEForm from './forms/i-i-s-test14-место-выдачи-e';
import IISTest14ОповещенияEForm from './forms/i-i-s-test14-оповещения-e';
import IISTest14ПродавецEForm from './forms/i-i-s-test14-продавец-e';
import IISTest14ТоварыEForm from './forms/i-i-s-test14-товары-e';
import IISTest14ВНаличииModel from './models/i-i-s-test14-в-наличии';
import IISTest14ЗаказыModel from './models/i-i-s-test14-заказы';
import IISTest14КонтрагентModel from './models/i-i-s-test14-контрагент';
import IISTest14МестоВыдачиModel from './models/i-i-s-test14-место-выдачи';
import IISTest14ОповещенияModel from './models/i-i-s-test14-оповещения';
import IISTest14ПродавецModel from './models/i-i-s-test14-продавец';
import IISTest14СоставЗаказаModel from './models/i-i-s-test14-состав-заказа';
import IISTest14ТоварыModel from './models/i-i-s-test14-товары';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-test14-в-наличии': IISTest14ВНаличииModel,
    'i-i-s-test14-заказы': IISTest14ЗаказыModel,
    'i-i-s-test14-контрагент': IISTest14КонтрагентModel,
    'i-i-s-test14-место-выдачи': IISTest14МестоВыдачиModel,
    'i-i-s-test14-оповещения': IISTest14ОповещенияModel,
    'i-i-s-test14-продавец': IISTest14ПродавецModel,
    'i-i-s-test14-состав-заказа': IISTest14СоставЗаказаModel,
    'i-i-s-test14-товары': IISTest14ТоварыModel
  },

  'application-name': 'Test14',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Test14',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Test14',
          title: 'Test14'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        test14: {
          caption: 'Test14',
          title: 'Test14',
          'i-i-s-test14-место-выдачи-l': {
            caption: 'Место выдачи',
            title: ''
          },
          'i-i-s-test14-продавец-l': {
            caption: 'Продавец',
            title: ''
          },
          'i-i-s-test14-товары-l': {
            caption: 'Товары',
            title: ''
          },
          'i-i-s-test14-заказы-l': {
            caption: 'Заказы',
            title: ''
          },
          'i-i-s-test14-контрагент-l': {
            caption: 'Контрагент',
            title: ''
          },
          'i-i-s-test14-оповещения-l': {
            caption: 'Оповещения',
            title: ''
          },
          'i-i-s-test14-в-наличии-l': {
            caption: 'В наличии',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-test14-в-наличии-l': IISTest14ВНаличииLForm,
    'i-i-s-test14-заказы-l': IISTest14ЗаказыLForm,
    'i-i-s-test14-контрагент-l': IISTest14КонтрагентLForm,
    'i-i-s-test14-место-выдачи-l': IISTest14МестоВыдачиLForm,
    'i-i-s-test14-оповещения-l': IISTest14ОповещенияLForm,
    'i-i-s-test14-продавец-l': IISTest14ПродавецLForm,
    'i-i-s-test14-товары-l': IISTest14ТоварыLForm,
    'i-i-s-test14-в-наличии-e': IISTest14ВНаличииEForm,
    'i-i-s-test14-заказы-e': IISTest14ЗаказыEForm,
    'i-i-s-test14-контрагент-e': IISTest14КонтрагентEForm,
    'i-i-s-test14-место-выдачи-e': IISTest14МестоВыдачиEForm,
    'i-i-s-test14-оповещения-e': IISTest14ОповещенияEForm,
    'i-i-s-test14-продавец-e': IISTest14ПродавецEForm,
    'i-i-s-test14-товары-e': IISTest14ТоварыEForm
  },

});

export default translations;
