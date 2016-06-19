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

module.exports = AppWindow;