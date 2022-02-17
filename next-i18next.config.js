const { resolve } = require('path');

module.exports = {
  i18n: {
    defaultLocale: 'ru-RU',
    locales: ['ru-RU'],
    localeStructure: '{{lng}}/{{ns}}',
    localeDetection: false,
    localePath: resolve('./locales'),
  },
  react: { useSuspense: false },
};
