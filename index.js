const fs = require('fs');

function readGraphqlSchema(module, filename) {
  module.exports = fs.readFileSync(filename, 'utf8'); // eslint-disable-line no-param-reassign
}
require.extensions['.graphqls'] = readGraphqlSchema;
