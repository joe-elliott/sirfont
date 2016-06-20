var configStore = require('../store/configStore');

var DetailPane = react.createClass({
    displayName: 'detailPane',
    onChangeToken: null,

    getInitialState: function() {
        return {
            backgroundColor: configStore.defaultValues.backgroundColor,
            foregroundColor: configStore.defaultValues.foregroundColor,
            fontSize: configStore.defaultValues.fontSize,
            fontPath: configStore.defaultValues.fontPath,
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
            fontPath: configStore.store.fontPath
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
                    fontFamily: 'C:\Users\joe\.sirFont\fonts\Kaleidoscopic Vision.ttf' //detailPane.state.fontPath
                }
            })
        );
    }
});

module.exports = DetailPane;