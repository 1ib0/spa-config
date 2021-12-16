
const eslint = require('./eslint');
const stylelint = require('./stylelint');
const prettier = require('./prettier');

console.log('--->', "{{name}}", "{{author}}")

module.exports = {
  eslint,
  stylelint,
  prettier,
};
