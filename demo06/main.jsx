var React = require('react');
var ReactDOM = require('react-dom');
var style = require('./index.css');

ReactDOM.render(
  <div>
    <p>{style.h1}</p>
    <h1 className={style.h1}>Hello World</h1>
    <h2 className="h2">Hello Webpack</h2>
  </div>,
  document.getElementById('example')
);
