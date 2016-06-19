var MasterPane = require('../components/MasterPane.js');
var DetailPane = require('../components/DetailPane.js');

var AppWindow = react.createClass({
    displayName: 'appWindow',
    render: function() {
        return react.createElement(
            'div',
            null,
            react.createElement(MasterPane, { className: 'master-pane'}),
            react.createElement(DetailPane, { className: 'detail-pane'})
        );
    }
});

module.exports = AppWindow;