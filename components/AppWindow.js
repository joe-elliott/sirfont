var MasterPane = require('../components/MasterPane.js');

var AppWindow = react.createClass({
    displayName: 'appWindow',
    render: function() {
        return react.createElement(
            'div',
            null,
            react.createElement(MasterPane, { className: 'master-pane'}),
            react.createElement('div', { className: 'detail-pane'}, 
                react.createElement('textarea')
            )
        );
    }
});

module.exports = AppWindow;