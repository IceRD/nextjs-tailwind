const path = require('path');

module.exports = {
  typescript: true,
  icon: false,
  expandProps: 'end',
  prettier: true,
  svgo: true,
  ignoreExisting: false,
  outDir: path.join(__dirname, '../'),
  indexTemplate: require(path.join(__dirname, 'index-template.js')),
  template: require(path.join(__dirname, 'template.js')),
  replaceAttrValues: { fill: 'currentColor', stroke: 'currentColor' }
}

