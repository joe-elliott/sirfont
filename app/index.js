var react = require('../node_modules/react');
var render = require('../node_modules/react-dom');

var AppWindow = react.createClass({
    displayName: 'appWindow',
    render: function() {
        return react.createElement(
            'div',
            null,
            react.createElement('div', { className: 'master-pane'}),
            react.createElement('div', { className: 'detail-pane'}, 
                react.createElement('textarea')
            )
        );
    }
});

render.render(
    react.createElement(AppWindow, null),
    document.getElementById('root')
);