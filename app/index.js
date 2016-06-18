var react = require('../node_modules/react');
var render = require('../node_modules/react-dom');

var HelloMessage = react.createClass({
    displayName: 'hello',
    render: function() {
        return react.createElement(
            'div',
            null,
            'hello ',
            this.props.name
        );
    }
});

render.render(
    react.createElement(HelloMessage, { name: 'simon' }),
    document.getElementById('root')
);