import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.test14.caption'),
          title: i18n.t('forms.application.sitemap.test14.title'),
          children: [{
            link: 'i-i-s-test14-место-выдачи-l',
            caption: i18n.t('forms.application.sitemap.test14.i-i-s-test14-место-выдачи-l.caption'),
            title: i18n.t('forms.application.sitemap.test14.i-i-s-test14-место-выдачи-l.title'),
            icon: 'paperclip',
            children: null
          }, {
            link: 'i-i-s-test14-продавец-l',
            caption: i18n.t('forms.application.sitemap.test14.i-i-s-test14-продавец-l.caption'),
            title: i18n.t('forms.application.sitemap.test14.i-i-s-test14-продавец-l.title'),
            icon: 'file',
            children: null
          }, {
            link: 'i-i-s-test14-товары-l',
            caption: i18n.t('forms.application.sitemap.test14.i-i-s-test14-товары-l.caption'),
            title: i18n.t('forms.application.sitemap.test14.i-i-s-test14-товары-l.title'),
            icon: 'address card',
            children: null
          }, {
            link: 'i-i-s-test14-заказы-l',
            caption: i18n.t('forms.application.sitemap.test14.i-i-s-test14-заказы-l.caption'),
            title: i18n.t('forms.application.sitemap.test14.i-i-s-test14-заказы-l.title'),
            icon: 'tags',
            children: null
          }, {
            link: 'i-i-s-test14-контрагент-l',
            caption: i18n.t('forms.application.sitemap.test14.i-i-s-test14-контрагент-l.caption'),
            title: i18n.t('forms.application.sitemap.test14.i-i-s-test14-контрагент-l.title'),
            icon: 'paperclip',
            children: null
          }, {
            link: 'i-i-s-test14-оповещения-l',
            caption: i18n.t('forms.application.sitemap.test14.i-i-s-test14-оповещения-l.caption'),
            title: i18n.t('forms.application.sitemap.test14.i-i-s-test14-оповещения-l.title'),
            icon: 'chart line',
            children: null
          }, {
            link: 'i-i-s-test14-в-наличии-l',
            caption: i18n.t('forms.application.sitemap.test14.i-i-s-test14-в-наличии-l.caption'),
            title: i18n.t('forms.application.sitemap.test14.i-i-s-test14-в-наличии-l.title'),
            icon: 'book',
            children: null
          }]
        }
      ]
    };
  }),
})