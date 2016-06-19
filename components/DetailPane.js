var configStore = require('../store/configStore');

var DetailPane = react.createClass({
    displayName: 'detailPane',
    onChangeToken: null,

    getInitialState: function() {
        return {
            backgroundColor: '#fff',
            foregroundColor: '#000'
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
            foregroundColor: configStore.store.foregroundColor
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
                    color: detailPane.state.foregroundColor
                }
            })
        );
    }
});

module.exports = DetailPane;