var react = require('react');
var render = require('react-dom');

var AppWindow = require('../components/AppWindow.js');

render.render(
    react.createElement(AppWindow, null),
    document.getElementById('root')
);