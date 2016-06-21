var configStore = require('../store/configStore');
var react = require('react');

var DetailPane = react.createClass({
    displayName: 'detailPane',
    onChangeToken: null,

    getInitialState: function() {
        return {
            backgroundColor: configStore.defaultValues.backgroundColor,
            foregroundColor: configStore.defaultValues.foregroundColor,
            fontSize: configStore.defaultValues.fontSize,
            fontName: configStore.defaultValues.fontName,
        }
    },
    
    componentDidMount: function() {
        this.onChangeToken = configStore.store.addListener(this._onChange);
    },

    componentWillUnmount: function() {
        configStore.store.remove(this.onChangeToken);
    },

    _onChange: function() {
        this.setState({
            backgroundColor: configStore.store.backgroundColor,
            foregroundColor: configStore.store.foregroundColor,
            fontSize: configStore.store.fontSize,
            fontName: configStore.store.fontName
        });
    },
    
    render: function() {
        var detailPane = this;

        return react.createElement(
            'div',
            {className: 'detail-pane'},
            react.createElement('textarea', {
                style: {
                    backgroundColor: detailPane.state.backgroundColor,
                    color: detailPane.state.foregroundColor,
                    fontSize: detailPane.state.fontSize,
                    fontFamily: detailPane.state.fontName
                }
            })
        );
    }
});

module.exports = DetailPane;