

require.ensure(['./a'], function(require) {
  var content = require('./a');
  document.open();
  document.write('<h1>' + content + '</h1>');
  document.write('<p>chengkangjian 10</p>');
  document.close();
});
